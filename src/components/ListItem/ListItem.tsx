import React, { MouseEventHandler, VFC, FC } from "react";
import {
  ListSubheader,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ListLabel } from "components/Modal";
import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

type ItemProps = {
  type: ListLabel
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  onDelete?: () => void;
};

export const ListItemComponent: VFC<ItemProps> = (props) => {
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
        {Icon === undefined ? null : <ListItemIcon>{Icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

type ListProps = {
  title: string;
  children: any;
};

export const ListComponent: FC<ListProps> = (props) => {
  return (
    <>
      <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
        {props.title}
      </ListSubheader>
      {props.children.length !== 0 ? props.children: <h3>検索結果なし</h3>}
    </>
  );
};
