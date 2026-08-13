# 東栄創産グループ — 公式サイト

> 中国・東莞の工場 × 東京・品川の商社。日中一体型の実業集団 公式 Web サイト

🌐 **本番**: https://toei-sosan.com
🚀 **ホスティング**: Cloudflare Pages
🛠 **スタック**: Astro 4.x (SSG) + 3 言語 (ja / zh / en)

---

## 🎨 デザインシステム

| 項目 | 値 |
|------|---|
| Primary | `#1B3A5C` (深い藍) |
| Accent | `#E29C52` (侘寂の橙) |
| BG | `#F8FAFC` |
| Display Font | Playfair Display (Latin) + Noto Serif SC (中文) + Noto Serif JP (日文) |
| Sans Font | Plus Jakarta Sans (英文) + Noto Sans SC (中文) + Noto Sans JP (日文) |
| スタイル | 侘寂 + ビジネス (控えめ、克制、温度感) |

詳細は `src/styles/tokens.css`。

---

## 📁 ディレクトリ構成

```
toei-sosan-group/
├── public/                  # 静的ファイル（favicon, logo, sitemap, robots）
│   ├── favicon.svg
│   ├── logo.svg            # 公式ロゴ（横組み、東栄創産グループ）
│   ├── og-default.svg      # デフォルト OG 画像
│   ├── robots.txt
│   ├── sitemap.xml         # メイン sitemap
│   ├── sitemap-cases.xml   # 案例
│   ├── sitemap-insights.xml
│   └── sitemap-news.xml
├── src/
│   ├── components/         # 共通コンポーネント
│   │   ├── Nav.astro       # ヘッダー (横組み lang switch)
│   │   ├── Footer.astro    # フッター (4 列)
│   │   ├── PageHero.astro  # サブページの hero
│   │   ├── SectionHeader.astro
│   │   └── ArticleLayout.astro  # 記事詳細 (cover + TOC + 進捗)
│   ├── content/            # Content Collections (Markdown)
│   │   ├── config.ts       # 3 collections × 3 langs
│   │   ├── cases/          # 案例（OEM 等の実績）
│   │   ├── insights/       # 業界知見（記事・コラム）
│   │   └── news/           # ニュース（お知らせ）
│   ├── i18n/
│   │   └── ui.ts           # 3 言語の UI 辞書
│   ├── layouts/
│   │   └── Layout.astro    # グローバル HTML shell
│   ├── pages/              # ルート (SSG)
│   │   ├── index.astro     # ホーム (ja)
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   ├── cases/          # 案例一覧 + 詳細
│   │   ├── insights/
│   │   ├── news/
│   │   ├── zh/              # 中文版ミラー
│   │   └── en/              # English版ミラー
│   └── styles/
│       ├── tokens.css      # CSS 変数（色・フォント・間隔）
│       └── global.css      # リセット + 共通スタイル
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🛠 開発ワークフロー

### 初回セットアップ

```bash
cd toei-sosan-group
npm install
```

### 開発サーバー起動

```bash
npm run dev
# → http://localhost:4321
```

### 本番ビルド

```bash
npm run build
# dist/ に出力
```

### Cloudflare Pages へデプロイ

```bash
# 環境変数（必要に応じて）
export PATH="/Users/ken/.nvm/versions/node/v24.14.0/bin:$PATH"

# 1. ビルド
npx --no-install astro build

# 2. AppleDouble メタデータを削除（macOS 外部ボリュームの対策）
find . -name '._*' -type f -not -path './node_modules/*' -delete

# 3. wrangler でデプロイ
CLOUDFLARE_API_TOKEN=cfut_xxx \
CLOUDFLARE_ACCOUNT_ID=c523c5a4d4460a3792cc8815d44c56ea \
npx --yes wrangler pages deploy dist \
  --project-name=toei-sosan-group \
  --branch=main \
  --commit-dirty=true
```

デプロイ後 URL:
- 本番: https://toei-sosan.com
- プレビュー: https://xxxxx.toei-sosan-group.pages.dev

---

## ✍️ 新しい記事・案例を追加する

### 1. Markdown ファイル作成

ファイル命名規則: `{連番}-{英語スラグ}.{lang}.md`
- 例: `03-new-product.ja.md` / `03-new-product.zh.md` / `03-new-product.en.md`

### 2. Frontmatter 必須フィールド

```yaml
---
title: "日本語タイトル"           # lang=ja の場合
title_zh: "中文标题"               # lang=zh
title_en: "English Title"          # lang=en
excerpt: "日本語抜粋"
excerpt_zh: "中文摘要"
excerpt_en: "English excerpt"
date: 2026-07-21
lang: ja                           # ja | zh | en
draft: false
cover: "https://images.unsplash.com/photo-xxx?w=1600&h=600&fit=crop"

# collection 固有:
# cases: industry, service, client
# insights: category
# news: type (announcement | service | partnership)
---
```

### 3. 本文（Markdown）

```markdown
## 課題

ここに本文を書く。

## 解決策

### サブセクション

- リスト項目
- リスト項目

## 結果

| 指標 | Before | After |
|------|--------|-------|
| コスト | 100 | 65   |
```

### 4. デプロイ

`git add . && git commit && git push`（または `wrangler pages deploy` 直接）

---

## 🖼 画像運用ガイド

### カバー画像

- **推奨サイズ**: 1600×600px（cover hero 用）
- **対応形式**: JPG / WebP / PNG
- **保存場所**: `src/content/{collection}/` の frontmatter `cover` フィールドに URL を書く
- **本番ホスティング**: Cloudflare R2 または外部 CDN（Unsplash / Imgix 等）

### Unsplash を使う場合（暫定）

```yaml
cover: "https://images.unsplash.com/photo-xxx?w=1600&h=600&fit=crop&auto=format&q=80"
```

### 自分で撮った写真を入れる場合

1. `public/uploads/` 配下に保存（例: `public/uploads/factory-2026.jpg`）
2. frontmatter に `/uploads/factory-2026.jpg` と書く
3. ビルド時 dist にコピーされる

---

## 🔍 SEO 設定

### sitemap.xml

- メイン: `public/sitemap.xml`（12 基本ページ）
- サブ: `sitemap-cases.xml` / `sitemap-insights.xml` / `sitemap-news.xml`
- 新しい記事追加時: 該当サブ sitemap に URL を追加

### Google Search Console への登録

1. https://search.google.com/search-console にアクセス
2. 「プロパティを追加」→ URL プレフィックス → `https://toei-sosan.com`
3. ドメイン所有権の確認（DNS TXT レコード追加）
   - 推奨: Cloudflare DNS で `TXT` レコード追加
4. 「サイトマップ」→ `https://toei-sosan.com/sitemap.xml` を送信
5. 1-2 週間でインデックス開始

### JSON-LD Schema

- Organization: 全ページ（`Layout.astro` 自動出力）
- Article / NewsArticle: 記事詳細（`ArticleLayout.astro` 自動出力）
- FAQ: FAQ モジュール追加時に `FAQPage` schema 出力

---

## 📊 Cloudflare Web Analytics 設定

1. Cloudflare Dashboard → Workers & Pages → `toei-sosan-group` → Analytics
2. 「Enable Web Analytics」をクリック
3. トークン（32 文字の hex 文字列）をコピー
4. プロジェクトルートに `.env` ファイル作成:
   ```bash
   PUBLIC_CF_BEACON_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
5. 再ビルド + デプロイ
6. 1-2 分後に Dashboard でデータ表示開始

---

## 📬 お問い合わせフォーム（Web3Forms）

### 仕組み

1. 訪問者が `contact.astro` フォーム送信
2. Web3Forms API → メールを `info@toei-sosan.com` へ送信
3. Cloudflare Email Routing → `462387747@qq.com` へ転送

### 設定確認

- Web3Forms access_key: `e9b29e3d-a8ad-45e6-9f75-44a84ee2c156`
- Cloudflare Email Routing:
  - Cloudflare Dashboard → `toei-sosan.com` → Email → Email Routing → Routes
  - 送信先: `462387747@qq.com`

### テスト送信

```bash
curl -X POST https://api.web3forms.com/submit \
  -H "Content-Type: application/json" \
  -d '{
    "access_key": "e9b29e3d-a8ad-45e6-9f75-44a84ee2c156",
    "subject": "テスト送信",
    "name": "テスト",
    "email": "test@example.com",
    "message": "これはテスト送信です"
  }'
```

成功時 `info@toei-sosan.com` → `462387747@qq.com` に届くはず。

---

## 🌐 言語切り替え仕様

- デフォルト: 日本語（`/`）
- 中文: `/zh/...`
- English: `/en/...`
- 横組み nav switcher: `JP / 中 / EN`（現在言語は下線）
- 内部リンクは `langPath()` ヘルパーで自動切替

### 新しいページの言語切り替えリンク確認

`src/i18n/ui.ts` の `getSwitchTarget` 関数で現在のページの他言語版 URL を計算。
新ページ追加時にこのヘルパーが正しく動作するか必ず確認。

---

## 🐛 トラブルシューティング

### ビルド時に `PageHero is not defined`

→ `import PageHero from '.../PageHero.astro'` を frontmatter に追加。

### 記事ページの URL に言語 suffix が付く

例: `/cases/01-toyota-oem.zh/` （`.zh` が残る）
→ これは Astro Content Collections の既知バグ。`src/i18n/ui.ts` の `cleanSlug()` で対応済み。
正規表現は `(zh|en)$`（ドットなし）— ファイル名に `.zh` があると slug が `xxxen` のように連結されるため。

### AppleDouble メタデータファイル（`._*`）が dist に混入

→ ビルド前に削除:
```bash
find . -name '._*' -type f -not -path './node_modules/*' -delete
```

### CSS の Noto Serif SC が反映されない

→ Layout.astro の Google Fonts URL に `Noto+Serif+SC:wght@400;500;600;700` が含まれているか確認。

---

## 📈 コンテンツ管理ルール

### 商用利用の注意

- 案例・画像に第三者の著作物を含めない
- OEM 客户名・ロゴは許可なく掲載しない
- Unsplash 画像は無料ライセンス（商用可）

### 言語間の整合性

- 同じ記事の 3 言語版は内容が一致すべき
- `industry` / `category` / `tags` フィールドは言語間で統一

### SEO チェックリスト（記事公開前）

- [ ] title が 50-60 文字以内
- [ ] excerpt が 150-160 文字以内
- [ ] cover 画像が 1600×600 以上
- [ ] 該当 sitemap に URL 追加

---

## 📞 緊急連絡先

- 代表者: 折田 豊（CEO） / 韓 龍一（副代表）
- メール: info@toei-sosan.com
- 微信: 462387747（QQ）
- ドメイン: toei-sosan.com（Cloudflare Registrar）
