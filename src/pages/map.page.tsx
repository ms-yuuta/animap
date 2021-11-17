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
import { Button } from "@mui/material";

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const [userTitleList, setUserTitleList] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);
  const handleDisplay = useHandleDisplay(setIsShow);
  useHandleKeyEvent(setIsShow);

  return (
    <SWRConfig value={{ fallback }}>
      <MapLayout>
        <TitleListContainer
          isShow={isShow}
          setUserTitleList={setUserTitleList}
          handleDisplay={handleDisplay}
          userTitleList={userTitleList}
        >
          <ModalForSearch setIsShow={setIsShow} handleDisplay={handleDisplay}>
            <div>
              <SearchScreen setUserTitleList={setUserTitleList} setIsShow={setIsShow} />
              <Button size="medium" variant="outlined" onClick={handleDisplay}>
                CLOSE
              </Button>
            </div>
          </ModalForSearch>
        </TitleListContainer>

        <Map GoogleMapComponent={<GoogleMapComponent userTitleList={userTitleList} />} />
      </MapLayout>
    </SWRConfig>
  );
};

export default App;
