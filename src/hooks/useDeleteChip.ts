import { titleListState } from "atoms/titleListState";
import { useCallback } from "react";
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