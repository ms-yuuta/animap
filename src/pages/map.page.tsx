import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { Fallback } from "model";
import { getStaticProps } from "./map.hooks";
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

  return (
    <SWRConfig value={{ fallback }}>
      <MapLayout>
        <TitleListContainer
          isShow={isShow}
          setTitleList={setTitleList}
          handleDisplay={handleDisplay}
          titleList={titleList}
        >
          <ModalForSearch setIsShow={setIsShow} handleDisplay={handleDisplay}>
            <SearchScreen setTitleList={setTitleList} setIsShow={setIsShow} />
          </ModalForSearch>
        </TitleListContainer>

        <Map GoogleMapComponent={<GoogleMapComponent titleList={titleList} />} />
      </MapLayout>
    </SWRConfig>
  );
};

export default App;
