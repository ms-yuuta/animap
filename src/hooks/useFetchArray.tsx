import useSWRImmutable from "swr/immutable";

type Asynchronous = {
  data: any;
  error: any;
  isLoading: boolean;
};

type FetchArray = () => Asynchronous;

const useFetchArray = (url: string): Asynchronous => {
  const { data, error } = useSWRImmutable(url);
  return { data, error, isLoading: !data && !error };
};

export const useSeichi: FetchArray = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/VrDJ8210827043712");
};

export const useWorks: FetchArray = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/yJlau210827043212");
};
