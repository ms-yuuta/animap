import React, { useCallback, useMemo } from "react";
import { ListItem } from "@mui/material";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { workListState } from "atoms/workListAtom";
import { Chip } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const Item = (props: { item: string; index: number }) => {
  const chipBgColor = useMemo(() => {
    switch (props.index) {
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
  }, [props.index]);

  const setWorkListValue: SetterOrUpdater<string[]> =
    useSetRecoilState(workListState);
  const handleDelete = useCallback(
    (i: number) => {
      setWorkListValue((prevList) => {
        return prevList.filter((_, index) => index !== i);
      });
    },
    [setWorkListValue]
  );

  return (
    <ListItem key={props.item} sx={{ p: 0 }}>
      <Chip
        label={props.item}
        onDelete={() => {
          handleDelete(props.index);
        }}
        sx={{
          boxShadow: 2,
          bgcolor: (theme: Theme) => chipBgColor,
        }}
      />
    </ListItem>
  );
};
