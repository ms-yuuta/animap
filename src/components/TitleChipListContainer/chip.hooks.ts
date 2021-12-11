import React, { useCallback, useMemo } from "react";

export const useDeleteChip = (setTitleList: React.Dispatch<React.SetStateAction<string[]>>) => {
  const handleDelete = useCallback(
    (e: any) => {
      const deleteTitle = e.target.parentNode.parentNode.innerText;
      setTitleList((prevList) => prevList.filter((title) => title !== deleteTitle));
    },
    [setTitleList]
  );

  return handleDelete;
};

export const useChipBgColor = () => {
  const chipBgColor = (index: number) => {
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
  };
  return chipBgColor;
};
