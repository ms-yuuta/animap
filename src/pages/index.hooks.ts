import { Seichi, Title } from "model";

export type Fallback = {
  [url: string]: Seichi | Title;
};

export const getStaticProps = async (): Promise<{
  props: { fallback: Fallback };
}> => {
  const SEICHI_API_URL = "https://jsondata.okiba.me/v1/json/VrDJ8210827043712";
  const seichi = await fetch(SEICHI_API_URL);
  const seichiData: Seichi = await seichi.json();

  const TITLE_API_URL = "https://jsondata.okiba.me/v1/json/yJlau210827043212";
  const title = await fetch(TITLE_API_URL);
  const titleData = await title.json();

  return {
    props: {
      fallback: {
        [SEICHI_API_URL]: seichiData,
        [TITLE_API_URL]: titleData,
      },
    },
  };
};
