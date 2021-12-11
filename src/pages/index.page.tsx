import { useState } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";

import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";

import { MapLayout } from "Layout";
import { TitleListContainer } from "components/TitleChipListContainer";
import { AniMapModal as SearchAnimeTitleModal } from "components/Modal";
import { Map as GoogleMap } from "components/Map";
import { SearchScreen } from "components/SearchScreen/searchScreen";

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const [userTitleList, setUserTitleList] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);
  const handleDisplay = useHandleDisplay(setIsShow);
  useHandleKeyEvent(setIsShow);
  useDisplayWelcomeToast();

  return (
    <SWRConfig value={{ fallback }}>
      <MapLayout>
        <TitleListContainer {...{ isShow, setUserTitleList, handleDisplay, userTitleList }}>
          <SearchAnimeTitleModal onClose={handleDisplay}>
            <SearchScreen setUserTitleList={setUserTitleList} setIsShow={setIsShow} />
          </SearchAnimeTitleModal>
        </TitleListContainer>
        <GoogleMap userTitleList={userTitleList} />
      </MapLayout>
    </SWRConfig>
  );
};

export default App;
