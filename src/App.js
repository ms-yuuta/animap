import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header/index";
import { Modal } from "./Components/Modal/index";
import { Main } from "./Components/Main/index";

function App() {
  const [workList, setWorkList] = useState([]);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="container">
      <Header setIsShow={setIsShow} workList={workList} setWorkList={setWorkList}/>
      <Main workList={workList}/>
      {isShow ? (
        <Modal
          isShow={isShow}
          setIsShow={setIsShow}
          setWorkList={setWorkList}
        />
      ) : null}
    </div>
  );
}

export default App;
