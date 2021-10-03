import "../../App.css";
import cc from "classcat";
import React, { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { workListState } from "../../atoms/workListAtom";

type Props = {
  item: string;
  index: number;
};

export const List: React.VFC<Props> = (props) => {
  console.log(props.index);

  const setWorkListValue: SetterOrUpdater<string[]> =
    useSetRecoilState(workListState);

  const handleDisplay = useCallback(
    (e: any): void => {
      console.log(e);
      setWorkListValue((prevArray: string[]) => {
        return prevArray.filter(
          (item: string) =>
            item !== e.target.previousSibling.previousSibling.textContent
        );
      });
    },
    [setWorkListValue]
  );

  return (
    <li key={props.item} className="work circle small bgWhite lightShadow">
      <p
        className={cc([
          "paragraph",
          {
            pink: props.index === 1,
            lightblue: props.index === 2,
            yellow: props.index === 3,
            springgreen: props.index === 4,
          },
        ])}
      >
        {props.item}
        <span className="span"> </span>
        <span onClick={handleDisplay} className="delete">
          ×
        </span>
      </p>
    </li>
  );
};
