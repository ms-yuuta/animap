import React from "react";
import "../../App.css";
import { List } from "./List";

type Props = {
  workList: string[];
  setWorkList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Scroll: React.VFC<Props> = (props) => {
  const handleDisplay = (e: any): void => {
    console.log(e);
    props.setWorkList((prevArray: string[]) => {
      return prevArray.filter(
        (item: string): boolean =>
          item !== e.target.previousSibling.previousSibling.textContent
      );
    });
  };
  return (
    <div className="scroll">
      <ul className="list horizontal xScrollContent">
        {props.workList.map((item: string, index: number) => {
          return (
            <List handleDisplay={handleDisplay} item={item} index={index} />
          );
        })}
      </ul>
    </div>
  );
};
