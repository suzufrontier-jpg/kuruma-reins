#!/usr/bin/env python3
"""
くるまれいんず - カーセンサー在庫スクレイピング v2
フロンティアモータース 橿原店
- 一覧ページ + 各車の詳細ページからデータ取得
"""

import urllib.request
import re
import json
import os
import time
from datetime import datetime
from html import unescape

SHOP_URL = "https://www.carsensor.net/shop/nara/326138005/stocklist/"
SHOP_NAME = "フロンティアモータース 橿原店"
OUTPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "inventory.json")
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"


def fetch_html(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8", errors="replace")


def parse_page(html):
    cars = []
    blocks = re.split(r'<div class="caset js_stock_list_cassette"', html)

    for block in blocks[1:]:
        if re.search(r'SOLD\s*OUT|売約済|商談中|ご成約', block, re.IGNORECASE):
            continue

        car = {}

        # Detail URL & ID
        detail_m = re.search(r"window\.open\('(/usedcar/detail/([^/]+)/index\.html)", block)
        if detail_m:
            car["url"] = "https://www.carsensor.net" + detail_m.group(1).split("?")[0]
            car["detailId"] = detail_m.group(2)

        # Maker
        maker_m = re.search(r'casetMedia__body__maker"[^>]*>([^<]+)<', block)
        if maker_m:
            car["maker"] = maker_m.group(1).strip()

        # Title
        title_m = re.search(r'casetMedia__body__title"[^>]*>\s*<a[^>]*>([^<]+)<', block)
        if title_m:
            full_title = unescape(title_m.group(1)).replace("\u00a0", " ").strip()
            parts = full_title.split(" ", 1)
            car["name"] = parts[0]
            car["grade"] = parts[1] if len(parts) > 1 else ""
        else:
            alt_m = re.search(r'alt="([^"]+)"', block)
            if alt_m:
                alt = unescape(alt_m.group(1)).replace("\u00a0", " ").strip()
                parts = alt.split(" ")
                car["maker"] = car.get("maker", parts[0])
                car["name"] = parts[1] if len(parts) > 1 else parts[0]
                car["grade"] = " ".join(parts[2:4]) if len(parts) > 2 else ""

        # Color
        spec_m = re.search(r'casetMedia__body__spec"[^>]*>(.*?)</div>', block, re.DOTALL)
        if spec_m:
            ps = re.findall(r'<p[^>]*>(.*?)</p>', spec_m.group(1), re.DOTALL)
            skip = {"法定整備付", "保証付", "車検整備付", "フロアCVT", "フロアAT",
                    "インパネCVT", "その他AT", "パートタイム4WD"}
            body_types = {"クロカン・ＳＵＶ", "ミニバン", "ハッチバック", "セダン",
                         "ステーションワゴン", "クーペ", "オープンカー", "トラック"}
            for p_text in ps:
                clean = re.sub(r'<[^>]+>', '', p_text).strip()
                if not clean or clean in skip or clean in body_types:
                    continue
                if re.match(r'フロア|インパネ|コラム', clean):
                    continue
                car["color"] = clean
                break

        # Total Price
        total_m = re.search(r'totalPrice__price__main"[^>]*>(\d+)</span>\s*<span[^>]*>([^<]*)<', block)
        if total_m:
            car["totalPrice"] = f"{total_m.group(1)}{total_m.group(2).strip()}万円"

        # Base Price
        base_m = re.search(r'basePrice__price__main"[^>]*>(\d+)</span>\s*<span[^>]*>([^<]*)<', block)
        if base_m:
            car["price"] = f"{base_m.group(1)}{base_m.group(2).strip()}万円"

        # Spec boxes (fallback only - detail page values take priority)
        spec_boxes = re.findall(
            r'specWrap__box__title"[^>]*>([^<]+)</p>\s*<p[^>]*>([^<]+)</p>', block)
        for title, value in spec_boxes:
            t, v = title.strip(), value.strip()
            if t == "年式": car["_list_year"] = v
            elif t == "走行距離": car["_list_mileage"] = v
            elif t == "排気量": car["_list_displacement"] = v
            elif t == "修復歴": car["_list_repairHistory"] = v

        # Inspection (list page - fallback)
        insp_m = re.search(r'specWrap__box__title"[^>]*>車検有無</p>\s*<p[^>]*>([^<]+)</p>\s*<p[^>]*>([^<]*)</p>', block)
        if insp_m:
            y = insp_m.group(1).strip()
            m_val = insp_m.group(2).strip()
            if "車検整備付" in y:
                car["_list_inspection"] = "車検整備付"
            else:
                year_num = re.search(r'(\d{4})', y)
                month_num = re.search(r'(\d{2})月', m_val)
                if year_num and month_num:
                    car["_list_inspection"] = f"{year_num.group(1)}年{month_num.group(1)}月"

        # Image URL
        img_m = re.search(r'data-original="([^"]+\.JPG)"', block, re.IGNORECASE)
        if img_m:
            img_url = img_m.group(1)
            if img_url.startswith("//"):
                img_url = "https:" + img_url
            car["image"] = img_url

        if car.get("maker") and car.get("name"):
            cars.append(car)

    return cars


def fetch_detail_info(car):
    """各車の詳細ページから追加情報を取得"""
    url = car.get("url")
    if not url:
        return

    try:
        html = fetch_html(url)
    except Exception as e:
        print(f"    ⚠️ 詳細ページ取得失敗: {e}")
        return

    # Extract all th/td pairs
    pairs = re.findall(r'<th[^>]*?>(.*?)</th>\s*<td[^>]*?>(.*?)</td>', html, re.DOTALL)
    for th_raw, td_raw in pairs:
        th = re.sub(r'<[^>]+>', '', th_raw).strip()
        td = re.sub(r'<[^>]+>', '', td_raw).strip()
        if not th or not td:
            continue

        if th == "ボディタイプ":
            car["bodyType"] = td
        elif th == "駆動方式":
            car["driveType"] = td
        elif th == "乗車定員":
            car["seats"] = td
        elif th == "エンジン種別":
            car["engineType"] = td
        elif th == "ドア数":
            car["doors"] = td
        elif th == "ミッション":
            car["transmission"] = td
        elif th == "ハンドル":
            car["steering"] = td
        elif th == "ワンオーナー" and td == "◯":
            car["oneOwner"] = True
        elif "年式" in th:
            # e.g. "2025(R07)" -> "2025"
            y_m = re.search(r'(\d{4})', td)
            if y_m:
                car["year"] = y_m.group(1)
        elif th == "走行距離":
            # Use exact value from detail: e.g. "7km", "0.9万km", "2.2万km"
            car["mileage"] = td
        elif th == "排気量":
            car["displacement"] = td
        elif th == "修復歴":
            car["repairHistory"] = td
        elif th == "車検":
            # Clean up long inspection text to short form
            insp = td.strip()
            if "車検整備付" in insp:
                car["inspection"] = "車検整備付"
            elif "車検残：無" in insp or "車検残:無" in insp:
                car["inspection"] = "車検残：無"
            elif "車検整備無" in insp or "車検整備別" in insp:
                car["inspection"] = insp.split("車検")[0] + "車検" if "年" in insp else insp[:10]
            else:
                # Extract date: "2027(R09)年6月" -> "2027年6月"
                import re as _re
                date_m = _re.search(r'(\d{4})\s*(?:\([^)]*\))?\s*年\s*(\d{1,2})月', insp)
                if date_m:
                    car["inspection"] = f"{date_m.group(1)}年{date_m.group(2).lstrip('0') or '0'}月"
                else:
                    car["inspection"] = insp[:15]
        elif th == "色":
            # Detail page color may be more accurate
            if not car.get("color") or car["color"] == "---":
                car["color"] = td

    # Dimensions: 全長×全幅×全高 (clean HTML first)
    clean_html = re.sub(r'<[^>]+>', ' ', html)
    dim_m = re.search(r'(\d{3,5})\s*[×x]\s*(\d{3,5})\s*[×x]\s*(\d{3,5})\s*[\(（]?\s*mm', clean_html)
    if dim_m:
        car["length"] = int(dim_m.group(1))
        car["width"] = int(dim_m.group(2))
        car["height"] = int(dim_m.group(3))

    # Weight
    weight_m = re.search(r'車両重量.*?(\d{3,5})\s*\(?\s*kg', html, re.DOTALL)
    if weight_m:
        car["weight"] = int(weight_m.group(1))

    # Fuel type
    fuel_m = re.search(r'使用燃料\s*</th>\s*<td[^>]*>\s*([^<\s]+)', html, re.DOTALL)
    if not fuel_m:
        fuel_m = re.search(r'使用燃料.*?<td[^>]*>\s*(\S+)', html, re.DOTALL)
    if fuel_m:
        car["fuelType"] = fuel_m.group(1).strip()

    # Seat rows
    seat_rows_m = re.search(r'シート列数\s*</th>\s*<td[^>]*>\s*(\d)', html, re.DOTALL)
    if seat_rows_m:
        car["seatRows"] = seat_rows_m.group(1) + "列"

    # Fallback: if detail page didn't provide, use list page values
    if not car.get("year") and car.get("_list_year"):
        car["year"] = car["_list_year"]
    if not car.get("mileage") and car.get("_list_mileage"):
        v = car["_list_mileage"]
        car["mileage"] = v + "万km"
    if not car.get("displacement") and car.get("_list_displacement"):
        car["displacement"] = car["_list_displacement"] + "cc"
    if not car.get("repairHistory") and car.get("_list_repairHistory"):
        car["repairHistory"] = car["_list_repairHistory"]
    if not car.get("inspection") and car.get("_list_inspection"):
        car["inspection"] = car["_list_inspection"]

    # Clean up temp keys
    for k in list(car.keys()):
        if k.startswith("_list_"):
            del car[k]

def main():
    print(f"🚗 くるまれいんず - 在庫データ更新 v2")
    print(f"🏪 {SHOP_NAME}")
    print(f"{'='*50}")

    all_cars = []

    # Page 1
    print(f"\n📄 ページ 1 を取得中...")
    html = fetch_html(SHOP_URL)
    cars = parse_page(html)
    print(f"  ✅ {len(cars)} 台を検出")
    all_cars.extend(cars)

    # More pages
    page = 2
    while f"PAGE={page}" in html:
        print(f"\n📄 ページ {page} を取得中...")
        html = fetch_html(f"{SHOP_URL}?PAGE={page}")
        cars = parse_page(html)
        print(f"  ✅ {len(cars)} 台を検出")
        all_cars.extend(cars)
        page += 1

    # Deduplicate
    seen = set()
    unique = []
    for car in all_cars:
        did = car.get("detailId", "")
        if did and did not in seen:
            seen.add(did)
            unique.append(car)

    # Fetch detail info for each car
    print(f"\n📋 各車の詳細情報を取得中... ({len(unique)}台)")
    for i, car in enumerate(unique, 1):
        name = f"{car.get('maker','')} {car.get('name','')}"
        print(f"  [{i:2d}/{len(unique)}] {name}...")
        fetch_detail_info(car)
        time.sleep(0.3)  # Be polite to the server

    # Write JSON
    output = {
        "shopName": SHOP_NAME,
        "shopUrl": "https://www.carsensor.net/shop/nara/326138005/",
        "lastUpdated": datetime.now().strftime("%Y/%m/%d %H:%M"),
        "totalCount": len(unique),
        "inventory": unique
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    # .js version
    js_file = OUTPUT_FILE.replace(".json", ".js")
    with open(js_file, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scraper.py v2 - " + output["lastUpdated"] + "\n")
        f.write("window.INVENTORY_DATA = ")
        json.dump(output, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"\n{'='*50}")
    print(f"✅ 完了！ {len(unique)} 台のデータを保存")
    print(f"📁 {OUTPUT_FILE}")
    print(f"⏰ {output['lastUpdated']}")
    print(f"\n📋 在庫一覧:")
    for i, c in enumerate(unique, 1):
        dims = f"{c.get('length','?')}×{c.get('width','?')}×{c.get('height','?')}mm" if c.get('length') else "---"
        print(f"  {i:2d}. {c.get('maker',''):<8s} {c.get('name',''):<15s} "
              f"{c.get('price','---'):>10s}  {c.get('year','----')}年  "
              f"{c.get('mileage','---'):>8s}  {dims}")


if __name__ == "__main__":
    main()
