import { useState } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";

import { Fallback } from "./index.hooks";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";

import { MapLayout } from "Layout";
import { TitleListContainer } from "components/TitleListContainer";
import { ModalForSearch, SearchScreen } from "components/Modal";
import { Map, GoogleMapComponent } from "components/Map";


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
        <Map GoogleMapComponent={<GoogleMapComponent userTitleList={titleList} />} />
      </MapLayout>
    </SWRConfig>
  );
};

export default App;
