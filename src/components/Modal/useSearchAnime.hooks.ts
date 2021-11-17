import { useHandleDisplay } from "hooks/useHandler";
import React, { useCallback, useEffect, useState } from "react";

type AnimeInfo = {
  regex: RegExp | undefined;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (title?: string) => void;
};

export const useSearchAnime = (
  setWorkList: React.Dispatch<React.SetStateAction<string[]>>,
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
    if (text === "") {
      setRegex(undefined);
    } else {
      setRegex(new RegExp(`.*${text}.*`));
    }
  }, [text]);

  const handleClick = useCallback(
    (title?: string) => {
      setWorkList((prevArray: string[]) => {
        return title ? [...prevArray, title] : [...prevArray, text];
      });
      handleDisplay();
    },
    [text, setWorkList, handleDisplay]
  );

  return {
    regex,
    text,
    handleChange,
    handleClick,
  };
};
