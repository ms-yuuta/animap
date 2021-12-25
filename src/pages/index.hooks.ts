import { useCallback, useEffect } from "react";
import { GetStaticProps } from "next";
import { useJsApiLoader } from "@react-google-maps/api";
import toast from "react-hot-toast";
import { Seichi, Work } from "model";

export type Fallback = {
  [url: string]: Seichi | Work;
};

type Props = {
  fallback: { [url: string]: Seichi | Work };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const SEICHI_API_URL = `${process.env.NEXT_PUBLIC_API_URL}?type=seichiList`;
  const seichi = await fetch(SEICHI_API_URL);
  const seichiData: Seichi = await seichi.json();

  const TITLE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}?type=workList`;
  const title = await fetch(TITLE_API_URL);
  const titleData: Work = await title.json();

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
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  const notify = useCallback(() => {
    toast("やほー！ 上のボタンからアニメタイトルを検索してみて！", {
      style: { position: "relative", top: "40px" },
      icon: "👏",
    });
  }, []);

  useEffect(() => {
    if (isLoaded && !loadError) notify();
  }, [notify, isLoaded, loadError]);
};
