import React, { useMemo } from "react";
import { ListItem } from "@mui/material";
import { Chip } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useDeleteChip } from "hooks/useDeleteChip";

export const Item = (props: { title: string; index: number }) => {
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
