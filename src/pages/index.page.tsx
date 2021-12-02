import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { getStaticProps, useDisplayWelcomeToast } from "./index.hooks";
import { Fallback } from "./index.hooks";
import { useState } from "react";
import { useHandleDisplay, useHandleKeyDown } from "hooks/useHandler";
import { Layout } from "Layout";
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
  useHandleKeyDown(setIsShow);
  useDisplayWelcomeToast();
 
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
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
      </Layout>
    </SWRConfig>
  );
};

export default App;
