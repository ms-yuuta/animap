import useSWRImmutable from "swr/immutable";
import { Seichi, FetchData, Title, FetchFunc } from "model";

const useFetchArray: FetchFunc<any> = (url) => {
  const { data, error } = useSWRImmutable<(Seichi | Title)[] | undefined, Error>(url);
  return { data, error, isLoading: !data && !error };
};

export const useFetchSeichi: FetchData<Seichi> = () => {
  return useFetchArray(`${process.env.NEXT_PUBLIC_API_URL}?sheet=seichiList`);
};

export const useFetchTitleList: FetchData<Title> = () => {
  return useFetchArray(`${process.env.NEXT_PUBLIC_API_URL}?sheet=workList`);
};
