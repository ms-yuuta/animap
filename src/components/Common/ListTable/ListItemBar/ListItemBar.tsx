import React, { MouseEventHandler, VFC, FC } from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ListLabel } from "components/Unique/TitleList";

type ItemProps = {
  type: ListLabel;
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  onDelete?: () => void;
};

export const ListItemBar: VFC<ItemProps> = (props) => {
  const { type, label, onClick } = props;
  const Icon = { search: undefined, trend: <TrendingUpIcon />, recent: <HistoryIcon /> }[type];

  return (
    <ListItem
      disablePadding
      key={label}
      sx={{ borderRadius: 1, ":hover": { bgcolor: "#9bc0ff" } }}
      secondaryAction={
        type === "recent" && (
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
