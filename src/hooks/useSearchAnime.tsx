import React, { useCallback, useEffect, useState } from "react";

type AnimeInfo = {
  regex: any;
  text: string;
  handleChange: any;
  handleClick: any;
};

export const useSerachAnime = (
  setWorkList: React.Dispatch<React.SetStateAction<string[]>>
): AnimeInfo => {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState<any>();

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
    (title?: string, e?: React.KeyboardEvent<HTMLInputElement>) => {
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
