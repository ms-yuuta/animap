import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  const url = "https://animap.vercel.app/";
  const title = "アニメ聖地AniMap";
  const description =
    "アニメ聖地AniMapは全国のアニメ聖地を地図上にマッピングするアプリケーションである。試練は、最新の聖地情報を反映させることと、聖地巡礼を普及するすることである。";
  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
