import { useCallback } from "react";

export const useHandleDisplay = (setIsShow: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean) => !prevIsShow);
  }, [setIsShow]);
  return handleDisplay;
};
