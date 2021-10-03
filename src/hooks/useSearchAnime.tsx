import React, { useCallback, useEffect, useState } from "react";

type AnimeInfo = {
  regex: any;
  text: string;
  handleChange: any;
  handleClick: any;
  handleAddAnime: (e: any) => void;
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

  const handleClick = useCallback(() => {
    setWorkList((prevArray: string[]) => [...prevArray, text]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleAddAnime = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement> | any) => {
      if (e.charCode === 13) {
        setWorkList((prevArray: string[]) => [...prevArray, text]);
      } else if (e.type === "click") {
        setWorkList((prevArray: string[]) => [
          ...prevArray,
          e.target.outerText,
        ]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text]
  );

  return {
    regex,
    text,
    handleChange,
    handleClick,
    handleAddAnime,
  };
};
