import { Header } from "./Components/Header";
import { ModalForSearch } from "./Components/Modal";
import { Main } from "./Components/Main";
import { useRecoilValue } from "recoil";
import { isShowState } from "./atoms/isShowAtom";
import { Box } from "@mui/system";

const App = () => {
  const isShow: boolean = useRecoilValue(isShowState);

  return (
    <Box>
      <Header />
      <Main />
      {isShow ? <ModalForSearch /> : null}
    </Box>
  );
};

export default App;
