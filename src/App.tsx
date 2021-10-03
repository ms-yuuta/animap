import "./App.css";
import { Header } from "./Components/Header";
import { Modal } from "./Components/Modal";
import { Main } from "./Components/Main";
import { useRecoilValue } from "recoil";
import { isShowState } from "./atoms/isShowAtom";

const App = () => {
  const isShow: boolean = useRecoilValue(isShowState);

  return (
    <div className="container">
      <Header />
      <Main />
      {isShow ? <Modal /> : null}
    </div>
  );
};

export default App;
