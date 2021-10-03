import React from "react";
import "../../App.css";
import { List } from "./List";
import { workListState } from "../../atoms/workListAtom";
import { useRecoilValue } from "recoil";

export const Scroll: React.VFC = () => {
  const workListValue: string[] = useRecoilValue(workListState);
  
  return (
    <div className="scroll">
      <ul className="list horizontal xScrollContent">
        {workListValue.map((item: string, index: number) => {
          return (
            <List item={item} index={index} />
          );
        })}
      </ul>
    </div>
  );
};
