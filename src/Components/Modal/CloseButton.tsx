import "../../App.css";
import { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { isShowState } from "../../atoms/isShowAtom";

export const CloseButton: React.VFC = () => {
  const setIsShow: SetterOrUpdater<boolean> = useSetRecoilState(isShowState);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
  }, [setIsShow]);

  return (
    <button onClick={handleDisplay} className="btn">
      close
    </button>
  );
};
