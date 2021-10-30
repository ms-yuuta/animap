import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { Box } from "@mui/system";
import { SWRConfig } from "swr";
import { Header } from "Components/Header";
import { ModalForSearch } from "Components/Modal";
import { Main } from "Components/Main";
import { isShowState } from "atoms/isShowAtom";
import { Fallback, Seichi } from "model";

export const getStaticProps = async (): Promise<{
  props: { fallback: Fallback };
}> => {
  const SEICHI_API_URL = "https://jsondata.okiba.me/v1/json/VrDJ8210827043712";
  const seichi = await fetch(SEICHI_API_URL);
  const seichiData: Seichi = await seichi.json();

  const TITLE_API_URL = "https://jsondata.okiba.me/v1/json/yJlau210827043212";
  const title = await fetch(TITLE_API_URL);
  const titleData = await title.json();

  return {
    props: {
      fallback: {
        [SEICHI_API_URL]: seichiData,
        [TITLE_API_URL]: titleData,
      },
    },
  };
};

const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  const isShow: boolean = useRecoilValue(isShowState);
  return (
    <Box>
      <SWRConfig value={{ fallback }}>
        <Header />
        <Main />
        {isShow ? <ModalForSearch /> : null}
      </SWRConfig>
    </Box>
  );
};

export default App;
