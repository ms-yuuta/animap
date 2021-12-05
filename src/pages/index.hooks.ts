import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

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
