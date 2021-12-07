import React, { useState, VFC } from "react";
import { Box, Button, Chip, Stack, Theme, IconButton, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useHandleDisplay } from "hooks/useHandler";
import { GoogleFormModal } from "components/GoogleFormModal/GoogleFormModal";
import { useChipBgColor, useDeleteChip } from "./chip.hooks";

const boxStyle = {
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: "14rem",
  zIndex: "tooltip",
  bgcolor: "background.paper",
  marginTop: 1.6,
  borderRadius: 1,
} as const;

const IconStyle = {
  display: "inline-block",
  position: "absolute",
  top: 0,
  right: "10px",
  zIndex: "tooltip",
  bgcolor: "background.paper",
  marginTop: 1.0,
  borderRadius: 0,
  ":hover": {
    bgcolor: "background.paper",
  },
};

const stackStyle = {
  height: 50,
  maxWidth: "100%",
  py: 0,
  px: 2,
  position: "absolute",
  top: 60,
  zIndex: "appBar",
  overflow: "auto",
} as const;

type Props = {
  isShow: boolean;
  children: JSX.Element;
  handleDisplay: () => void;
  userTitleList: string[];
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleListContainer: VFC<Props> = (props) => {
  const handleDelete = useDeleteChip(props.setUserTitleList);
  const chipBgColor = useChipBgColor();
  const [isFormOpen, setIsFromOpen] = useState(false);
  const handleFormShow = useHandleDisplay(setIsFromOpen);

  return (
    <div>
      <Box sx={boxStyle}>
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={props.handleDisplay}>
          Search...
        </Button>
      </Box>
      <IconButton sx={IconStyle} onClick={handleFormShow}>
        <AddLocationAltIcon />
      </IconButton>
      {isFormOpen && <GoogleFormModal handleClose={handleFormShow} />}
      <Stack direction="row" spacing={2} sx={stackStyle}>
        {props.userTitleList.map((title: string, i: number) => {
          return (
            <ListItem sx={{ p: 0 }} key={title}>
              <Chip
                label={title}
                onDelete={() => handleDelete(i)}
                sx={{
                  boxShadow: 2,
                  bgcolor: (theme: Theme) => chipBgColor(i),
                }}
              />
            </ListItem>
          );
        })}
      </Stack>
      {props.isShow && props.children}
    </div>
  );
};
