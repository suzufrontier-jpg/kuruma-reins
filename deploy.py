#!/usr/bin/env python3
"""
くるまれいんず - ワンクリック更新スクリプト
1. カーセンサーの在庫データをスクレイピング
2. Netlifyに自動デプロイ
"""

import os
import sys
import json
import zipfile
import io
import urllib.request
import subprocess
from datetime import datetime

# ===== 設定 =====
SITE_ID = "voluble-elf-855e20"  # Netlifyのサイト名
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
TOKEN_FILE = os.path.join(SCRIPT_DIR, ".netlify_token")

# デプロイに含めるファイル拡張子
DEPLOY_EXTENSIONS = {".html", ".css", ".js", ".json", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".ico", ".webp", ".woff", ".woff2", ".ttf"}

# デプロイから除外するファイル/フォルダ
EXCLUDE_FILES = {"deploy.py", "scraper.py", ".netlify_token", ".DS_Store", "update.command"}
EXCLUDE_DIRS = {"node_modules", ".git", "__pycache__"}


def get_token():
    """APIトークンを読み込む（なければ入力を求める）"""
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, "r") as f:
            token = f.read().strip()
            if token:
                return token

    print("\n" + "=" * 50)
    print("🔑 初回セットアップ: Netlify APIトークンが必要です")
    print("=" * 50)
    print()
    print("以下の手順でトークンを取得してください:")
    print("1. https://app.netlify.com/user/applications#personal-access-tokens にアクセス")
    print("2. 「New access token」をクリック")
    print("3. 名前を入力（例: くるまれいんず）")
    print("4. 「Generate token」をクリック")
    print("5. 表示されたトークンをコピー")
    print()

    token = input("トークンを貼り付けてください: ").strip()
    if not token:
        print("❌ トークンが入力されませんでした")
        sys.exit(1)

    # トークンを保存
    with open(TOKEN_FILE, "w") as f:
        f.write(token)
    print("✅ トークンを保存しました（次回からは自動で読み込まれます）")
    return token


def run_scraper():
    """カーセンサーから在庫データをスクレイピング"""
    scraper_path = os.path.join(SCRIPT_DIR, "inventory", "scraper.py")
    if not os.path.exists(scraper_path):
        print("❌ scraper.py が見つかりません")
        sys.exit(1)

    print("\n📡 カーセンサーから最新の在庫データを取得中...")
    result = subprocess.run(
        [sys.executable, scraper_path],
        cwd=SCRIPT_DIR,
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        print("❌ スクレイピングに失敗しました:")
        print(result.stderr)
        sys.exit(1)

    print(result.stdout)

    # 結果を確認
    inv_file = os.path.join(SCRIPT_DIR, "inventory", "inventory.json")
    if os.path.exists(inv_file):
        with open(inv_file, "r", encoding="utf-8") as f:
            data = json.load(f)
        print(f"📦 在庫データ: {data.get('totalCount', '?')} 台")
    return True


def create_deploy_zip():
    """デプロイ用のZIPファイルを作成"""
    print("\n📦 デプロイ用ファイルを準備中...")
    buf = io.BytesIO()
    file_count = 0

    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(SCRIPT_DIR):
            # 除外フォルダをスキップ
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

            for filename in files:
                # 除外ファイルをスキップ
                if filename in EXCLUDE_FILES:
                    continue
                if filename.startswith("."):
                    continue

                filepath = os.path.join(root, filename)
                _, ext = os.path.splitext(filename)

                # 許可された拡張子のみ含める
                if ext.lower() not in DEPLOY_EXTENSIONS:
                    continue

                # ZIP内の相対パス
                arcname = os.path.relpath(filepath, SCRIPT_DIR)
                zf.write(filepath, arcname)
                file_count += 1

    print(f"  ✅ {file_count} ファイルをパッケージ化")
    return buf.getvalue()


def deploy_to_netlify(zip_data, token):
    """NetlifyにZIPをデプロイ"""
    print(f"\n🚀 Netlifyにデプロイ中...")
    url = f"https://api.netlify.com/api/v1/sites/{SITE_ID}.netlify.app/deploys"

    req = urllib.request.Request(
        url,
        data=zip_data,
        headers={
            "Content-Type": "application/zip",
            "Authorization": f"Bearer {token}",
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            deploy_url = result.get("ssl_url") or result.get("url", "")
            state = result.get("state", "unknown")
            print(f"  ✅ デプロイ完了！")
            print(f"  🌐 URL: {deploy_url}")
            print(f"  📊 状態: {state}")
            return True
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        if e.code == 401:
            print("❌ 認証エラー: トークンが無効です")
            print("   トークンを再設定するには .netlify_token ファイルを削除してください")
        elif e.code == 404:
            print("❌ サイトが見つかりません。サイトIDを確認してください")
        else:
            print(f"❌ デプロイエラー (HTTP {e.code}): {body[:200]}")
        return False
    except Exception as e:
        print(f"❌ エラー: {e}")
        return False


def main():
    print("=" * 50)
    print("🚗 くるまれいんず - ワンクリック更新")
    print(f"⏰ {datetime.now().strftime('%Y/%m/%d %H:%M')}")
    print("=" * 50)

    # 1. トークン取得
    token = get_token()

    # 2. スクレイピング実行
    run_scraper()

    # 3. ZIPファイル作成
    zip_data = create_deploy_zip()

    # 4. Netlifyにデプロイ
    success = deploy_to_netlify(zip_data, token)

    print("\n" + "=" * 50)
    if success:
        print("🎉 更新完了！ サイトが最新の在庫データに更新されました")
        print(f"🌐 https://{SITE_ID}.netlify.app")
    else:
        print("❌ 更新に失敗しました。上記のエラーを確認してください")
    print("=" * 50)

    input("\nEnterキーで閉じる...")


if __name__ == "__main__":
    main()
