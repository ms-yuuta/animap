import React, { useCallback, useEffect, useState } from "react";

type AnimeInfo = {
  regex: RegExp | undefined;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useSearchAnime = (): AnimeInfo => {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState<RegExp | undefined>(undefined);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }, []);

  // 検索エンジン
  useEffect(() => {
    text === "" ? setRegex(undefined) : setRegex(new RegExp(`.*${text}.*`));
  }, [text]);

  return { regex, text, handleChange };
};
