import { useCallback, useEffect, useState } from "react";

export const useSerachAnime = (setWorkList) => {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState();

  const handleChange = useCallback((e) => {
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

  const handleClick = useCallback(() => {
    setWorkList((prevArray) => [...prevArray, text]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleAddAnime = useCallback(
    (e) => {
      if (e.charCode === 13) {
        setWorkList((prevArray) => [...prevArray, text]);
      } else if (e.type === "click") {
        setWorkList((prevArray) => [...prevArray, e.target.outerText]);
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
