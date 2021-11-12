import { Seichi, Title } from "model";

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("データの取得ができなかったので、表示ができません");
  }
  const json: (Seichi | Title)[]  = await response.json();
  return json;
};
