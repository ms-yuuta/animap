import { titleListState } from "atoms/titleListState";
import { useCallback, useMemo } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

export const useDeleteChip = () => {
  const setWorkList: SetterOrUpdater<string[]> = useSetRecoilState(titleListState);

  const handleDelete = useCallback(
    (i: number) => {
      setWorkList((prevList) => {
        return prevList.filter((_, index) => index !== i);
      });
    },
    [setWorkList]
  );

  return handleDelete;
}


export const useChipBgColor = (index: number) => {
  const chipBgColor = useMemo(() => {
    switch (index) {
      case 0:
        return "pink";
      case 1:
        return "lightblue";
      case 2:
        return "yellow";
      case 3:
        return "springgreen";
      case 4:
        return "purple";
      default:
        return "white";
    }
  }, [index]);

  return chipBgColor
}