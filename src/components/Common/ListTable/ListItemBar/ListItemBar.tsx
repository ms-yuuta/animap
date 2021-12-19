import React, { MouseEventHandler, VFC, FC } from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ListLabel } from "components/Unique/TitleList";

type ItemProps = {
  iconType?: ListLabel;
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  onDelete?: (() => void) | undefined;
};

export const ListItemBar: VFC<ItemProps> = (props) => {
  const { iconType = "no", label, onClick } = props;
  const Icon = { no: undefined, trend: <TrendingUpIcon />, history: <HistoryIcon /> }[iconType];

  return (
    <ListItem
      disablePadding
      key={label}
      sx={{ borderRadius: 1, ":hover": { bgcolor: "#9bc0ff" } }}
      secondaryAction={
        !!props.onDelete && (
          <IconButton edge="end" aria-label="delete" onClick={props.onDelete}>
            <ClearIcon />
          </IconButton>
        )
      }
    >
      <ListItemButton onClick={onClick}>
        {!Icon ? null : <ListItemIcon>{Icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
