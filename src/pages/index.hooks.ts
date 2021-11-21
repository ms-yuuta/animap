import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

export const useDisplayLoadingToast = () => {
  const loadingNotify = useCallback(() => toast.loading("Loading...", { position: "top-right" }), []);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  return loadingNotify;
};

export const useDisplayMove = () => {
  const moveNotify = useCallback(() => toast("View AniMap!!"), []);
  return moveNotify;
};
