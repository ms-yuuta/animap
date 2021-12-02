import { Seichi, Title } from "model";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

export type Fallback = {
  [url: string]: Seichi | Title;
};

export const getStaticProps = async (): Promise<{
  props: { fallback: Fallback };
}> => {
  const SEICHI_API_URL = `${process.env.NEXT_PUBLIC_API_URL}?sheet=seichiList`;
  const seichi = await fetch(SEICHI_API_URL);
  const seichiData: Seichi = await seichi.json();

  const TITLE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}?sheet=workList`;
  const title = await fetch(TITLE_API_URL);
  const titleData: Title = await title.json();

  return {
    props: {
      fallback: {
        [SEICHI_API_URL]: seichiData,
        [TITLE_API_URL]: titleData,
      },
    },
  };
};

export const useDisplayWelcomeToast = () => {
  const notify = useCallback(() => {
    toast("やほー！ 上のボタンからアニメタイトルを検索してみて！", {
      style: { position: "relative", top: "40px" },
      icon: "👏",
    });
  }, []);

  useEffect(() => {
    notify();
  }, [notify]);
};
