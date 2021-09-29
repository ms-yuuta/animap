import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Modal } from "./Components/Modal/index";
import { Main } from "./Components/Main/index";

const App = () => {
  const [workList, setWorkList] = useState<string[]>([]);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="container">
      <Header
        workList={workList}
        setIsShow={setIsShow}
        setWorkList={setWorkList}
      />
      <Main workList={workList} />
      {isShow ? (
        <Modal
          isShow={isShow}
          setIsShow={setIsShow}
          setWorkList={setWorkList}
        />
      ) : null}
    </div>
  );
};

export default App;
