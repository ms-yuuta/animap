import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { useHandleDisplay } from "hooks/useHandler";
import { Work } from "model";

export const useFetchTitleList = () => {
  const { data, error } = useSWR<Work[], Error>(`${process.env.NEXT_PUBLIC_API_URL}?type=workList`);
  return { data, error };
};

export const useFilterWorkList = (data: Work[] | undefined, regex: RegExp) => {
  const filteredWork = useMemo(() => data?.filter(({ title }) => regex.test(title)), [data, regex]);
  return filteredWork;
};

const trendList = ["鬼滅の刃", "ソードアート・オンライン"];
const trendData: { label: "trend"; list: string[] } = { label: "trend", list: [...trendList] };

type DefaultList = Array<{ label: "history" | "trend"; list: string[] }>;

export const useDefaultList = (list: string[]) => {
  const defaultList: DefaultList = useMemo(() => {
    return list.length > 0
      ? [{ ...trendData }, { label: "history", list: [...list] }]
      : [{ ...trendData }];
  }, [list]);

  return defaultList;
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

export const useHandleClick = (
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>,
  userTitleList: string[],
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>
) => {
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

  const handleDisplay = useHandleDisplay(setIsShow);
  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e: any) => {
      if (!userTitleList.includes(e.target.innerText)) handleSetTitle(e.target.innerText);
      handleDisplay();
    },
    [userTitleList, handleSetTitle, handleDisplay]
  );

  const handleDelete = useCallback(
    (name: string) => {
      setHistoryList((prevList: string[]) => prevList.filter((item) => item !== name));
    },
    [setHistoryList]
  );

  return { historyList, setHistoryList, handleClick, handleDelete };
};
