import { Seichi, Title } from "model";
import { GetStaticProps } from "next";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

export type Fallback = {
  [url: string]: Seichi | Title;
};

type Props = {
  fallback: { [url: string]: Seichi | Title };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const SEICHI_API_URL = `${process.env.NEXT_PUBLIC_API_URL}?type=seichiList`;
  const seichi = await fetch(SEICHI_API_URL);
  const seichiData: Seichi = await seichi.json();

  const TITLE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}?type=workList`;
  const title = await fetch(TITLE_API_URL);
  const titleData: Title = await title.json();

  return {
    props: {
      fallback: {
        [SEICHI_API_URL]: seichiData,
        [TITLE_API_URL]: titleData,
      },
    },
    revalidate: 10,
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
