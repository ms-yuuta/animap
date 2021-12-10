import React, { MouseEventHandler, VFC } from "react";
import {
  ListSubheader,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

type ItemProps = {
  type: string;
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  onDelete?: () => void;
};

export const ListItemComponent: VFC<ItemProps> = (props) => {
  const { type, label, onClick } = props;
  const Icon = { trend: <TrendingUpIcon />, recent: <HistoryIcon /> }[type];
  return (
    <ListItem
      disablePadding
      key={label}
      sx={{ borderRadius: 1, ":hover": { bgcolor: "#9bc0ff" } }}
      secondaryAction={
        type === "normal" || type === "trend" ? null : (
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

// type ListProps = {
//   title: string;
//   list: string[];
//   item: ItemProps;
// };

// export const ListComponent: VFC<ListProps> = (props) => {
//   const { item } = props;
//   return (
//     <>
//       <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
//         {props.title}
//       </ListSubheader>
//       {props.list.map((string) => (
//         <ListItemComponent key={string} {...item} />
//       ))}
//     </>
//   );
// };
