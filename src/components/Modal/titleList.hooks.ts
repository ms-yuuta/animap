import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { useHandleDisplay } from "hooks/useHandler";
import useSWRImmutable from "swr/immutable";
import { Title } from "model";

export const useFetchTitleList = () => {
  const { data, error } = useSWRImmutable<Title[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=workList`
  );
  return { data, error };
};

const addStorage = async (title: string, historyList: string[]) => {
  if (historyList.length > 0) {
    const newData = historyList.join(",") + `,${title}`;
    localStorage.setItem("HistoryList", newData);
  } else {
    localStorage.setItem("HistoryList", title);
  }
};

const setStorage = async (list: string[]) => {
  localStorage.setItem("HistoryList", list.join(","));
};

const trendList = ["鬼滅の刃", "ソードアート・オンライン"];
const trendData = { label: "trend", list: [...trendList] };

export const useDefaultList = (list: string[]) => {
  const defaultList = useMemo(() => {
    return list.length > 0
      ? [{ ...trendData }, { label: "recent", list: [...list] }]
      : [{ ...trendData }];
  }, [list]);

  return defaultList;
};

// modalの表示、非表示でmount, unmountされる
export const useEffectStorage = (
  historyList: string[],
  setState: React.Dispatch<React.SetStateAction<string[]>>
) => {
  useEffect(() => {
    const storageString = localStorage.getItem("HistoryList");
    storageString && setState(storageString.split(","));
  }, [setState]);

  useEffect(() => {
    // 消される時のみに実行される関数
    setStorage(historyList);
  }, [historyList]);
};

const useHandleSetTitle = (setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>) => {
  const [historyList, setHistoryList] = useState<string[]>([]);
  const handleSetTitle = useCallback(
    (name: string) => {
      setUserTitleList((prevArray: string[]) => [...prevArray, name]);
      setHistoryList((prevList: string[]) => [...prevList, name]);
      // 追加される時に実行される関数
      historyList.indexOf(name) === -1 && addStorage(name, historyList);
    },
    [setUserTitleList, historyList]
  );

  return { historyList, setHistoryList, handleSetTitle };
};

export const useHandleClick = (
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>,
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const handleDisplay = useHandleDisplay(setIsShow);
  const { historyList, setHistoryList, handleSetTitle } = useHandleSetTitle(setUserTitleList);
  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e: any) => {
      handleSetTitle(e.target.innerText);
      handleDisplay();
    },
    [handleSetTitle, handleDisplay]
  );

  return { historyList, setHistoryList, handleClick };
};
