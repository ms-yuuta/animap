import { useMemo } from "react";
import useSWR from "swr";
import { Seichi } from "model";

export const useFetchSeichiData = () => {
  const { data, error } = useSWR<Seichi[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=seichiList`
  );
  return { data, error };
};

export const useMarkerColor = (userTitleList: string[]) => {
  const divideMarkerColor = (title: string) => {
    const index = userTitleList.indexOf(title);
    const colors = ["pink", "blue", "yellow", "green", "purple"];
    return colors[index];
  };
  return divideMarkerColor;
};

export const useFilterSeichi = (data: Seichi[] | undefined, userTitleList: string[]) => {
  const userSeichiData = useMemo(
    () => data?.filter(({ title }) => userTitleList.includes(title)),
    [userTitleList, data]
  );
  return userSeichiData;
}
