# 台湾旅行ガイド

台湾の魅力的な観光地、文化、グルメを紹介する総合ガイドサイト

## 特徴

- **インタラクティブな台湾地図**: クリックで各地域の詳細情報にアクセス
- **地域別観光ガイド**: 花蓮、台東、台北、台中、台南、高雄の詳細情報
- **実用的な旅行情報**: 観光方法、電車ガイド、文化的背景
- **レスポンシブデザイン**: モバイルとデスクトップの両方に対応
- **美しいビジュアル**: 体験的でビジュアル中心のデザイン

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **フォント**: Noto Sans JP

## ページ構成

### メインページ
- `/` - トップページ（台湾地図とヒーローセクション）

### 地域別ガイド
- `/area/hualien` - 花蓮・太魯閣
- `/area/taitung` - 台東・知本
- `/area/taipei` - 台北・九份
- `/area/taichung` - 台中
- `/area/tainan` - 台南
- `/area/kaohsiung` - 高雄
- `/areas` - 地域一覧ページ

### 旅行ガイド
- `/how-to-travel` - 観光方法ガイド
- `/train-guide` - 電車ガイド（高鐵・台鐵）
- `/culture-differences` - 文化と習慣

## セットアップ

### 前提条件
- Node.js 18.17以上
- npm または yarn

### インストール

1. 依存関係をインストール:
\`\`\`bash
npm install
\`\`\`

2. 開発サーバーを起動:
\`\`\`bash
npm run dev
\`\`\`

3. ブラウザで http://localhost:3000 を開く

### ビルド

プロダクション用にビルド:
\`\`\`bash
npm run build
\`\`\`

## プロジェクト構造

\`\`\`
taiwan-travel/
├── src/
│   ├── app/                 # App Router ページ
│   │   ├── area/           # 地域別ページ
│   │   ├── how-to-travel/  # 観光方法ページ
│   │   ├── train-guide/    # 電車ガイドページ
│   │   ├── culture-differences/ # 文化ページ
│   │   ├── areas/          # 地域一覧ページ
│   │   ├── layout.tsx      # ルートレイアウト
│   │   ├── page.tsx        # トップページ
│   │   └── globals.css     # グローバルスタイル
│   ├── components/         # 再利用可能コンポーネント
│   │   ├── Header.tsx      # ヘッダーナビゲーション
│   │   ├── Footer.tsx      # フッター
│   │   └── TaiwanMap.tsx   # インタラクティブ地図
│   ├── lib/               # ユーティリティとデータ
│   │   └── areaData.ts    # 地域データ
│   └── types/             # TypeScript型定義
├── public/
│   └── images/            # 画像ファイル
├── tailwind.config.js     # Tailwind設定
├── next.config.js         # Next.js設定
└── package.json
\`\`\`

## 地域データ

各地域の情報は \`src/lib/areaData.ts\` で管理されています:

- 地域名と説明
- 観光スポット情報（3セクション）
- ハイライト
- ベストシーズン
- アクセス情報

## カスタマイズ

### 新しい地域の追加

1. \`src/lib/areaData.ts\` に新しい地域データを追加
2. \`src/components/TaiwanMap.tsx\` に地図上の領域を追加
3. 必要に応じて画像を \`public/images/\` に配置

### スタイリングの変更

- Tailwindクラスを使用してスタイリング
- カスタムカラーは \`tailwind.config.js\` で定義
- グローバルスタイルは \`src/app/globals.css\` で管理

## ライセンス

このプロジェクトは教育・個人利用目的で作成されています。# Landhana
