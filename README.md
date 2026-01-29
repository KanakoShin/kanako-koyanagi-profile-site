# kanako-koyanagi-profile-site

就活用ポートフォリオです

## コミットルール

個人の急ぎ作る制作物として、（推奨されませんが）ブランチを分けず、main ブランチに直接 push & merge します。

## CSSルール

- 基本的にBEMを使用
- layout関係は接頭にlayoutを使用
- utility関係は接頭にutilityを使用

## デザインについて

このポートフォリオは、限られた時間の中で制作する必要がありました。
そのため、優先順位を　コンテンツとマークアップ > 見た目 にしています。
よって、完成したデザインカンプを起点にするのではなく、
HTML構造を起点としてCSSでレイアウトや余白を調整しました。

また、細かいレスポンシブ対応はしていませんが、
gridスタイルなどの活用で、最低限対応しています。

## 画像について

本来であれば、ユーザー体験のために必須ですが、
時間削減のためレスポンシブ画像を使用していません。

## アクセシビリティ対応について

- [Accessibility Visualizer](https://chromewebstore.google.com/detail/accessibility-visualizer/idcacekakoknnpbfjcdhnkffgfbddnhk)を使用してのチェック※スクリーンリーダーまではテストできていません
- 文字と背景色の充分なコントラスト比
- 適切なhtmlマークアップを目指す
- スキップリンクの配置

## 表示パフォーマンスについて

- pagespeed insightsを使用してチェック済み。時間制約のため、改善はなしで最低限の対応。

## codepenについて

codepenではコードが読みにくい場合や、表示されない場合は[こちら（Githubリポジトリ）](https://github.com/KanakoShin/kanako-koyanagi-profile-site/tree/main/examples)を参照してください。
※作成したデモは、React、JavaScript周りについてはAIで生成したコードを元に作成しています。
