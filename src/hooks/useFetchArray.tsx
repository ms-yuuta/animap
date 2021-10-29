import useSWRImmutable from "swr/immutable";
import { AsyncData, SeichiDate, TitleData } from "../model";

type FetchSeichiArray = () => SeichiDate;
type FetchTitleArray = () => TitleData;

const useFetchArray = (url: string): AsyncData => {
  const { data, error } = useSWRImmutable(url);
  return { data, error, isLoading: !data && !error };
};

export const useSeichi: FetchSeichiArray = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/VrDJ8210827043712");
};

export const useWorks: FetchTitleArray = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/yJlau210827043212");
};
