import { useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { SWRConfig } from "swr";

import { LinearProgress } from "@mui/material";
import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { MapLayout } from "Layout";
import { TitleChipListBar } from "components/Unique/TitleChipListBar";
import { AddSeichiButtonSet, SearchButtonSet } from "components/Unique/ButtonSet";
// import { Map as GoogleMap } from "components/Unique/Map";

const DynamicGoogleMap = dynamic(() => import("components/Unique/Map/GoogleMap"), {
  loading: () => <LinearProgress />,
});

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const [userTitleList, setUserTitleList] = useState<string[]>([]);
  useDisplayWelcomeToast();

  return (
    <SWRConfig value={{ fallback }}>
      <MapLayout
        SearchButtonSet={<SearchButtonSet setUserTitleList={setUserTitleList} />}
        AddSeichiButtonSet={<AddSeichiButtonSet />}
        TitleChipListBar={<TitleChipListBar {...{ userTitleList, setUserTitleList }} />}
        GoogleMap={<DynamicGoogleMap userTitleList={userTitleList} />}
      />
    </SWRConfig>
  );
};

export default App;
