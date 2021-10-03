import "../../App.css";
import { useCallback } from "react";
import { Scroll } from "./Scroll";
import React from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { isShowState } from "../../atoms/isShowAtom";

export const Header: React.FC = () => {
  const setIsShow: SetterOrUpdater<boolean> = useSetRecoilState(isShowState);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
  }, [setIsShow]);

  return (
    <header>
      <div className="header">
        <button onClick={handleDisplay} className="btn search">
          Search
        </button>
      </div>
      <Scroll />
    </header>
  );
};
