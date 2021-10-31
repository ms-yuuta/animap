# [AniMap](https://animap.vercel.app/)
## You can search "SEICHI"
"SEICHI" refers to places that are dear to the hearts of fans, such as places where the anime was set, places where the characters' names originated, or places of the same name.

## Detail:
### WHO
People who are interested in "SEICHI".

### WHY
Because it is displayed on a map, you can see where "SEICHI" is at a glance.

### WHAT
- You can filter your search by anime title.
- Multiple anime titles can be selected.
- It uses google maps, so you can also use street view.


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

In the project directory, you can run:

### `yarn dev` or `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

