import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

export const useDisplayLoadingToast = () => {
  const notify = useCallback(() => toast.loading("Loading...", { position: "top-right" }), []);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  return notify;
}