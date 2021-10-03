import useSWR from "swr";

type Asynchronous = {
  data: any;
  error: any;
  isLoading: boolean;
};

type FetchArray = () => Asynchronous;

const useFetchArray = (url: string): Asynchronous => {
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("データの取得ができなかったので、表示ができません");
    }
    const json = await response.json();
    return json;
  };

  const { data, error } = useSWR(url, fetcher);

  return { data, error, isLoading: !data && !error };
};

export const useSeichi: FetchArray = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/VrDJ8210827043712");
};

export const useWorks: FetchArray = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/yJlau210827043212");
};
