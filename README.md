# お金がかかるのでサイトは停止中。。。

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React 勉強用リポジトリ

【概要】<br />
Connpass と Dorkeper から、兵庫・大阪の勉強会情報をクローリングし<br />
リスト表示するサイトを構築する。

【Web アプリ URL】<br />
https://chamele-on.web.app/

【今できていること】

- Connpass から兵庫・大阪の勉強会情報を取得してリスト表示(タブで切替)
- Clound Functions でクローリング処理をスケジュール実行<br />
  (Deploy 後、処理中にタイムウトエラーが発生するようになった、現在調査中)

【今後実装する機能】

- Storybook / jest を導入してユニットテスト
- Cypress を導入して E2E テスト
- loading 画面
- タブ表示の改善(スクロールで消えないようにする)

<br />
<br />

## ■ フロントエンド

- React で作成

  - hooks を活用し、全て関数コンポーネントで作成
  - TypeScript(tsx)で実装
  - UI フレームワークは「semantic-ui-react」を使用

- Atomic Conponents でコンポーネント設計

  - 詳細：https://qiita.com/kahirokunn/items/b599d2cf04d2580c412c
  - 保守性を重要視、間違いは気づいた段階でリファクタリング中

<br />
<br />

## ■ バックエンド

- Firebase / Node.js で作成

  - Node.js(Puppeteer、TypeScript) でクローリング処理を実装
  - Cloud Functions でクローリングをスケジュール実行

- Noimage 用の画像は妻が作ってくれました！

  - Storage にアップロードした Noimage 画像を参照

  ![noimage](https://firebasestorage.googleapis.com/v0/b/chamele-on.appspot.com/o/images%2Fnoimage.jpg?alt=media)
