import "../../App.css";
import { useCallback } from "react";
import { Scroll } from "./Scroll";

export const Header = (props) => {
  const handleDisplay = useCallback(() => {
    props.setIsShow((prevIsShow) => !prevIsShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header">
      <button onClick={handleDisplay} className="btn search">
        Search
      </button>
      <Scroll workList={props.workList} setWorkList={props.setWorkList}/>
    </header>
  );
};
