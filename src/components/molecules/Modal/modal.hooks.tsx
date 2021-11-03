import React, { useCallback, useEffect, useState } from "react";

type AnimeInfo = {
  regex: RegExp | undefined;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (title?: string) => void;
};

export const useSerachAnime = (
  setWorkList: React.Dispatch<React.SetStateAction<string[]>>
): AnimeInfo => {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState<RegExp | undefined>(undefined);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setText(e.target.value);
    },
    []
  );

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
    },
    [text, setWorkList]
  );

  return {
    regex,
    text,
    handleChange,
    handleClick,
  };
};
