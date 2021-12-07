import { VFC } from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

type Props = {
  type: string;
  label: string;
  handleClick: () => void;
  handleDelete?: () => void;
};

export const ListItemComponent: VFC<Props> = (props) => {
  const { type, label, handleClick } = props;
  const Icon = { trend: <TrendingUpIcon />, recent: <HistoryIcon /> }[type];
  return (
    <ListItem
      disablePadding
      key={label}
      sx={{ borderRadius: 1, ":hover": { bgcolor: "#9bc0ff" } }}
      secondaryAction={
        type === "normal" ? null : (
          <IconButton edge="end" aria-label="delete" onClick={props.handleDelete}>
            <ClearIcon />
          </IconButton>
        )
      }
    >
      <ListItemButton onClick={handleClick}>
        {Icon === undefined ? null : <ListItemIcon>{Icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
