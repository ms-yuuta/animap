import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { MapLayout } from "Layout";
import { TitleChipListBar } from "components/Unique/TitleChipListBar";
import { AddSeichiButtonSet, SearchButtonSet } from "components/Unique/ButtonSet";
import { Map as GoogleMap } from "components/Unique/Map";

const title = "アニメ聖地AniMap";
const description = "アニメタイトルからアニメ聖地情報を地図上にマッピング。";

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const [userTitleList, setUserTitleList] = useState<string[]>([]);
  useDisplayWelcomeToast();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <SWRConfig value={{ fallback }}>
        <MapLayout
          SearchButtonSet={<SearchButtonSet setUserTitleList={setUserTitleList} />}
          AddSeichiButtonSet={<AddSeichiButtonSet />}
          TitleChipListBar={<TitleChipListBar {...{ userTitleList, setUserTitleList }} />}
          GoogleMap={<GoogleMap userTitleList={userTitleList} />}
        />
      </SWRConfig>
    </>
  );
};

export default App;
