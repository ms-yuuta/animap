import useSWRImmutable from "swr/immutable";
import { Seichi } from "model";

export const useFetchSeichiData = () => {
  const { data, error } = useSWRImmutable<Seichi[], Error>(
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
