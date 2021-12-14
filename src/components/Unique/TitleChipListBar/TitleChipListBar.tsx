import React, { VFC } from "react";
import { Chip, Theme, ListItem } from "@mui/material";

import { useChipBgColor, useDeleteChip } from "./chip.hooks";

type Props = {
  userTitleList: string[];
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleChipListBar: VFC<Props> = (props) => {
  const handleDelete = useDeleteChip(props.setUserTitleList);
  const chipBgColor = useChipBgColor();

  return (
    <>
      {props.userTitleList.map((title: string, i: number) => (
        <ListItem sx={{ p: 0 }} key={`${title}-${i}`}>
          <Chip
            label={title}
            onDelete={handleDelete}
            sx={{ boxShadow: 2, bgcolor: (theme: Theme) => chipBgColor(i) }}
          />
        </ListItem>
      ))}
    </>
  );
};
