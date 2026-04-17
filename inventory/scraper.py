#!/usr/bin/env python3
"""
くるまれいんず - カーセンサー在庫スクレイピング
フロンティアモータース 橿原店
"""

import urllib.request
import re
import json
import os
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
    # Split by each car listing block
    blocks = re.split(r'<div class="caset js_stock_list_cassette"', html)

    for block in blocks[1:]:  # skip first (before first car)
        # Skip SOLD OUT / 売約済 cars
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

        # Title (car name + grade)
        title_m = re.search(r'casetMedia__body__title"[^>]*>\s*<a[^>]*>([^<]+)<', block)
        if title_m:
            full_title = unescape(title_m.group(1)).replace("\u00a0", " ").strip()
            # Split: first word = car name, rest = grade
            parts = full_title.split(" ", 1)
            car["name"] = parts[0]
            car["grade"] = parts[1] if len(parts) > 1 else ""
        else:
            # fallback: from alt text
            alt_m = re.search(r'alt="([^"]+)"', block)
            if alt_m:
                alt = unescape(alt_m.group(1)).replace("\u00a0", " ").strip()
                parts = alt.split(" ")
                car["maker"] = car.get("maker", parts[0])
                car["name"] = parts[1] if len(parts) > 1 else parts[0]
                car["grade"] = " ".join(parts[2:4]) if len(parts) > 2 else ""

        # Color - extract from spec block, looking for color-related text
        spec_m = re.search(r'casetMedia__body__spec"[^>]*>(.*?)</div>', block, re.DOTALL)
        if spec_m:
            ps = re.findall(r'<p[^>]*>(.*?)</p>', spec_m.group(1), re.DOTALL)
            skip = {"法定整備付", "保証付", "車検整備付", "フロアCVT", "フロアAT",
                    "インパネCVT", "その他AT", "パートタイム4WD"}
            body_types = {"クロカン・ＳＵＶ", "ミニバン", "ハッチバック", "セダン",
                         "ステーションワゴン", "クーペ", "オープンカー", "トラック"}
            for p_text in ps:
                clean = re.sub(r'<[^>]+>', '', p_text).strip()
                if not clean:
                    continue
                if clean in skip or clean in body_types:
                    continue
                if re.match(r'フロア|インパネ|コラム', clean):
                    continue
                # This should be the color
                car["color"] = clean
                break

        # Total Price
        total_m = re.search(r'totalPrice__price__main"[^>]*>(\d+)</span>\s*<span[^>]*>([^<]*)<', block)
        if total_m:
            main = total_m.group(1)
            sub = total_m.group(2).strip()
            car["totalPrice"] = f"{main}{sub}万円"

        # Base Price
        base_m = re.search(r'basePrice__price__main"[^>]*>(\d+)</span>\s*<span[^>]*>([^<]*)<', block)
        if base_m:
            main = base_m.group(1)
            sub = base_m.group(2).strip()
            car["price"] = f"{main}{sub}万円"

        # Spec boxes: year, mileage, displacement, inspection, repair
        spec_boxes = re.findall(
            r'specWrap__box__title"[^>]*>([^<]+)</p>\s*<p[^>]*>([^<]+)</p>',
            block
        )
        for title, value in spec_boxes:
            t = title.strip()
            v = value.strip()
            if t == "年式":
                car["year"] = v
            elif t == "走行距離":
                car["mileage"] = v + "万km"
            elif t == "排気量":
                car["displacement"] = v + "cc"
            elif t == "修復歴":
                car["repairHistory"] = v

        # Inspection (special: may have 2 lines)
        insp_m = re.search(r'specWrap__box__title"[^>]*>車検有無</p>\s*<p[^>]*>([^<]+)</p>\s*<p[^>]*>([^<]*)</p>', block)
        if insp_m:
            y = insp_m.group(1).strip()
            m_val = insp_m.group(2).strip()
            if "車検整備付" in y:
                car["inspection"] = "車検整備付"
            else:
                year_num = re.search(r'(\d{4})', y)
                month_num = re.search(r'(\d{2})月', m_val)
                if year_num and month_num:
                    car["inspection"] = f"{year_num.group(1)}年{month_num.group(1)}月"

        # Image URL
        img_m = re.search(r'data-original="([^"]+\.JPG)"', block, re.IGNORECASE)
        if img_m:
            img_url = img_m.group(1)
            if img_url.startswith("//"):
                img_url = "https:" + img_url
            car["image"] = img_url

        # Only add if we have at minimum maker + name
        if car.get("maker") and car.get("name"):
            cars.append(car)

    return cars


def main():
    print(f"🚗 くるまれいんず - 在庫データ更新")
    print(f"🏪 {SHOP_NAME}")
    print(f"{'='*50}")

    all_cars = []

    # Page 1
    print(f"\n📄 ページ 1 を取得中...")
    html = fetch_html(SHOP_URL)
    cars = parse_page(html)
    print(f"  ✅ {len(cars)} 台を検出")
    all_cars.extend(cars)

    # Check for more pages
    page = 2
    while f"PAGE={page}" in html:
        print(f"\n📄 ページ {page} を取得中...")
        html = fetch_html(f"{SHOP_URL}?PAGE={page}")
        cars = parse_page(html)
        print(f"  ✅ {len(cars)} 台を検出")
        all_cars.extend(cars)
        page += 1

    # Deduplicate by detailId
    seen = set()
    unique = []
    for car in all_cars:
        did = car.get("detailId", "")
        if did and did not in seen:
            seen.add(did)
            unique.append(car)

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

    # Also write .js version for file:// protocol (no CORS issues)
    js_file = OUTPUT_FILE.replace(".json", ".js")
    with open(js_file, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scraper.py - " + output["lastUpdated"] + "\n")
        f.write("window.INVENTORY_DATA = ")
        json.dump(output, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"\n{'='*50}")
    print(f"✅ 完了！ {len(unique)} 台のデータを保存")
    print(f"📁 {OUTPUT_FILE}")
    print(f"⏰ {output['lastUpdated']}")
    print(f"\n📋 在庫一覧:")
    for i, c in enumerate(unique, 1):
        print(f"  {i:2d}. {c.get('maker',''):<8s} {c.get('name',''):<15s} "
              f"{c.get('price','---'):>10s}  {c.get('year','----')}年  "
              f"{c.get('mileage','---'):>8s}  {c.get('color','---')}")


if __name__ == "__main__":
    main()
