import { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { isModalOpenState } from "atoms/isModalOpenState";

export const useHandleDisplay = () => {
  const setIsOpen: SetterOrUpdater<boolean> = useSetRecoilState(isModalOpenState);
  const handleDisplay = useCallback(() => {
    setIsOpen((prevIsShow: boolean) => !prevIsShow);
  }, [setIsOpen]);
  return handleDisplay
};
