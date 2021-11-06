import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  const url = "https://animap.vercel.app/";
  const title = "AniMap";
  const description =
    "AniMap is a tool for visualizing and analyzing the dynamics of an animated graph.";

  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
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
