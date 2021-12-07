import { useState } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";

import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";

import { MapLayout } from "Layout";
import { TitleListContainer } from "components/TitleChipListContainer";
import { ModalForSearch, SearchScreen } from "components/Modal";
import { Map as GoogleMap, MapContent } from "components/Map";

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const [titleList, setTitleList] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);
  const handleDisplay = useHandleDisplay(setIsShow);
  useHandleKeyEvent(setIsShow);
  useDisplayWelcomeToast();

  return (
    <SWRConfig value={{ fallback }}>
      <MapLayout>
        <TitleListContainer
          isShow={isShow}
          setUserTitleList={setTitleList}
          handleDisplay={handleDisplay}
          userTitleList={titleList}
        >
          <ModalForSearch setIsShow={setIsShow} handleDisplay={handleDisplay}>
            <SearchScreen setUserTitleList={setTitleList} setIsShow={setIsShow} />
          </ModalForSearch>
        </TitleListContainer>
        <GoogleMap MapContent={<MapContent userTitleList={titleList} />} />
      </MapLayout>
    </SWRConfig>
  );
};

export default App;
