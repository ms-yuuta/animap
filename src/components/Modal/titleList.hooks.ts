import { useEffect, useMemo } from "react";

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

export const useEffectStorage = (
  historyList: string[],
  setState: React.Dispatch<React.SetStateAction<string[]>>
) => {
  useEffect(() => {
    const storageString = localStorage.getItem("HistoryList");
    storageString && setState(storageString.split(","));
  }, [setState]);

  useEffect(() => {
    () => localStorage.setItem("HistoryList", historyList.join(","));
  }, [historyList]);
};
