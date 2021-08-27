import useSWR from "swr";

const useFetchArray = (url) => {
  const fetcher = async (url) => {
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


export const useSeichi = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/VrDJ8210827043712");
}

export const useWorks = () => {
  return useFetchArray("https://jsondata.okiba.me/v1/json/yJlau210827043212");
}