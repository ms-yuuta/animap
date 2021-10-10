import { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { isShowState } from "../../atoms/isShowAtom";
import { Button } from "@mui/material";

export const CloseButton: React.VFC = () => {
  const setIsShow: SetterOrUpdater<boolean> = useSetRecoilState(isShowState);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
  }, [setIsShow]);

  return (
    <Button size="medium" variant="outlined" onClick={handleDisplay}>
      CLOSE
    </Button>
  );
};
