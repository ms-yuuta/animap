import React, { useMemo } from "react";
import { ListItem } from "@mui/material";
import { Chip } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useChipBgColor, useDeleteChip } from "./Item.hooks";

export const Item = (props: { title: string; index: number }) => {
  const chipBgColor = useChipBgColor(props.index)
  const handleDelete = useDeleteChip();

  return (
    <ListItem key={props.title} sx={{ p: 0 }}>
      <Chip
        label={props.title}
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
