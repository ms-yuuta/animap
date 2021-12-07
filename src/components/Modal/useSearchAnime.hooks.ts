import React, { useCallback, useEffect, useState } from "react";
import { handleHistory, useHandleDisplay } from "hooks/useHandler";

type AnimeInfo = {
  regex: RegExp | undefined;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (title: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => void;
};

export const setStorage = async (title: string) => {
  // const title = e.target.value;
  const localList = localStorage.getItem("HistoryList");
  if(localList) {
    const newData = localList + `,${title}`;
    localStorage.setItem("HistoryList", newData);
  } else {
    localStorage.setItem("HistoryList", title);
  }
}

export const useSearchAnime = (
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>,
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
): AnimeInfo => {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState<RegExp | undefined>(undefined);

  const handleDisplay = useHandleDisplay(setIsShow);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }, []);

  // 検索エンジン
  useEffect(() => {
    text === "" ? setRegex(undefined) : setRegex(new RegExp(`.*${text}.*`));
  }, [text]);

  const handleClick = useCallback(
    (title: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
      setUserTitleList((prevArray: string[]) => {
        return [...prevArray, title];
      });
      handleDisplay();
      handleHistory(title, setState);
      setStorage(title);
    },
    [setUserTitleList, handleDisplay]
  );

  return {
    regex,
    text,
    handleChange,
    handleClick,
  };
};

