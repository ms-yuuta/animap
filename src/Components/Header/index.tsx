import "../../App.css";
import { useCallback } from "react";
import { Scroll } from "./Scroll";
import React from "react";

type Props = {
  workList: string[]
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
  setWorkList: React.Dispatch<React.SetStateAction<string[]>>
}

export const Header: React.FC<Props> = (props) => {
  const handleDisplay = useCallback(() => {
    props.setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <div className="header">
        <button onClick={handleDisplay} className="btn search">
          Search
        </button>
      </div>
      <Scroll workList={props.workList} setWorkList={props.setWorkList} />
    </header>
  );
};
