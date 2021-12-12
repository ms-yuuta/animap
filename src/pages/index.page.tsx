import { useState } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";

import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { MapLayout } from "Layout";
import { TitleListContainer } from "components/TitleChipListContainer";
import { Map as GoogleMap } from "components/Map";

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const [userTitleList, setUserTitleList] = useState<string[]>([]);
  useDisplayWelcomeToast();

  return (
    <SWRConfig value={{ fallback }}>
      <MapLayout>
        <TitleListContainer {...{ setUserTitleList, userTitleList }} />
        <GoogleMap userTitleList={userTitleList} />
      </MapLayout>
    </SWRConfig>
  );
};

export default App;
