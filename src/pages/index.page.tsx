import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { Box } from "@mui/system";
import { SWRConfig } from "swr";
import { Header } from "components/Header";
import { ModalForSearch } from "components/molecules/Modal";
import { Map } from "components/Map";
import { isModalOpenState } from "atoms/isModalOpenState";
import { Fallback } from "model";
import { getStaticProps } from "./index.hooks";

export { getStaticProps };

export const App: NextPage<{ fallback: Fallback }> = (props) => {
  const { fallback } = props;
  return (
    <Box height="100vh" width="100%">
      <SWRConfig value={{ fallback }}>
        <Header />
        <Map />
        
      </SWRConfig>
    </Box>
  );
};

export default App;
