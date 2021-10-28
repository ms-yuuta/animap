import type { NextPage } from "next";
import { Header } from "../Components/Header";
import { ModalForSearch } from "../Components/Modal";
import { Main } from "../Components/Main";
import { useRecoilValue } from "recoil";
import { isShowState } from "../atoms/isShowAtom";
import { Box } from "@mui/system";

// export const getStaticProps = async () => {
//   const markers = [
//     {
//       id: 1,
//       name: "東京タワー",
//       lat: 35.658,
//       lng: 139.74,
//     },
//   ];

//   return {
//     props: { markers },
//   };
// };

const App: NextPage = () => {
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
