import { useState } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";

import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { MapLayout } from "Layout";
import { TitleChipListBar } from "components/Unique/TitleChipListBar";
import { AddSeichiButtonSet, SearchButtonSet } from "components/Unique/ButtonSet";
import { Map as GoogleMap } from "components/Unique/Map";

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
        GoogleMap={<GoogleMap userTitleList={userTitleList} />}
      />
    </SWRConfig>
  );
};

export default App;
