建物法定点検ナビ  LP 一式
==============================

■ 公開先（想定）
  サブドメイン: inspection.yokohamakensetsuboukakensa.jp
  ルート（/）に index.html が来るように配置してください。

■ ファイル構成
  index.html            … LP本体
  assets/css/style.css  … スタイル
  assets/js/main.js     … アニメーション・フォーム制御
  assets/img/           … OGP画像・favicon（グレーはすべて差し替え用プレースホルダー）
  sitemap.xml           … サイトマップ
  robots.txt            … クローラー設定

■ 差し替えが必要な箇所
  1) イラスト・写真: HTML内の class="ph"（グレーの斜線ボックス）がすべて差し替え箇所です。
     <div class="ph ...">…</div> を <img src="..." alt="..."> に置き換えてください。
  2) OGP画像: assets/img/ogp.png を実物に差し替え（1200×630px推奨）。
  3) お問い合わせフォーム: 現在は送信先未設定のデモ動作です。
     メール送信またはCloudflare等のフォームサービスと連携してください。
     index.html の <form action="#"> の action と、main.js の handleSubmit を実運用に合わせて修正。

■ SEO対策済みの内容
  - title / description / keywords / canonical / robots メタ
  - OGP / Twitterカード
  - 構造化データ(JSON-LD): GeneralContractor / Service / FAQPage / BreadcrumbList
  - 見出し構造（h1は1つ、h2/h3で階層化）
  - 「東京・横浜・川崎」「12条点検」「特定建築物定期調査」等のキーワードを本文に配置
  - sitemap.xml / robots.txt

■ 注意（点検周期・料金の表記）
  点検の周期・対象は建物用途や特定行政庁の指定で変わるため「目安」と明記しています。
  料金・数値は貴社の実情に合わせて必ず調整してください。

■ 連絡先情報（現状の記載値／公開前に要確認）
  屋号: 横浜建設防火検査 / 〒230-0011 神奈川県横浜市鶴見区上末吉5-15-9
  TEL: 050-5471-9187 / 平日9:00-18:00
