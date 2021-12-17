import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SWRConfig } from "swr";

import { LinearProgress } from "@mui/material";
import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { MapLayout } from "Layout";
import { TitleChipListBar } from "components/Unique/TitleChipListBar";
import { AddSeichiButtonSet, SearchButtonSet } from "components/Unique/ButtonSet";
const DynamicGoogleMap = dynamic(() => import("components/Unique/Map/GoogleMap"), {
  loading: () => <LinearProgress />,
});

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
          GoogleMap={<DynamicGoogleMap userTitleList={userTitleList} />}
        />
      </SWRConfig>
    </>
  );
};

export default App;
