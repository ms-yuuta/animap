import React, { useMemo } from "react";
import { ListItem } from "@mui/material";

export const TitleChip = (props: { chip: JSX.Element }) => {
  return (
    <ListItem sx={{ p: 0 }}>
      {props.chip}
    </ListItem>
  );
};
