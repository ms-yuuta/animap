import { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { isShowState } from "../atoms/isShowAtom";

export const useHandleDisplay = () => {
  const setIsShow: SetterOrUpdater<boolean> = useSetRecoilState(isShowState);
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean) => !prevIsShow);
  }, [setIsShow]);
  return handleDisplay
};
