import useSWRImmutable from "swr/immutable";
import { Seichi, FetchData, Title, FetchFunc } from "model";

const useFetchArray: FetchFunc<any> = (url) => {
  const { data, error } = useSWRImmutable<(Seichi | Title)[] | undefined, Error>(url);
  return { data, error, isLoading: !data && !error };
};

export const useFetchSeichi: FetchData<Seichi> = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/VrDJ8210827043712");
};

export const useFetchTitleList: FetchData<Title> = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/yJlau210827043212");
};
