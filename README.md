# [AniMap](https://animap.vercel.app/)
## アニメタイトルからアニメ聖地を"
アニメタイトルを検索するだけで、そのアニメ聖地がマップに表示されるよ！（2013年くらいまでのデータ）

## 詳細:
- アニメタイトルからの聖地表示
- 複数のアニメタイトルも可能

### 技術
- Next.js
- SWR
- Material-UI

状態管理ライブラリRecoilからReact Hooksに変更し、パフォーマンスの改善。

## 開発環境を作る

### 開発用サーバの立ち上げよう！
ソースコードをcloneしよう！

```sh
$ git clone https://github.com/ms-yuuta/animap.git
```

```sh
$ cd animap
```
Google Maps APIのkeyの取得しよう！

- [Google Maps Platform](https://mapsplatform.google.com/)
- [keyの取得方法(参考：ねんでブログ)](https://nendeb.com/276)

.envに`NEXT_PUBLIC_GOOGLE_MAP_API_KEY=[API_KEY]`を設定！

## スクリプトの実行

### `yarn dev` or `npm run dev`

[http://localhost:3000](http://localhost:3000)で確認

