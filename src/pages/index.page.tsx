import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { Fallback } from "./index.hooks";
import { useState } from "react";
import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";
import { MapLayout } from "Layout";
import { TitleListContainer } from "components/TitleListContainer";
import { ModalForSearch } from "components/Modal";
import { SearchScreen } from "components/Modal/SearchScreen";
import { Map } from "components/Map";
import { GoogleMapComponent } from "components/Map/GoogleMapComponent";

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
