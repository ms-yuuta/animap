import React, { useState, VFC } from "react";
import { Box, Button, Chip, Stack, Theme, IconButton, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useHandleDisplay } from "hooks/useHandler";
import { useChipBgColor, useDeleteChip } from "./chip.hooks";
import { AniMapModal as AddSeichiInfoModal } from "components/Modal";

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
  const { userTitleList, setUserTitleList } = props;
  const [isFormOpen, setIsFromOpen] = useState(false);
  const handleFormShow = useHandleDisplay(setIsFromOpen);

  return (
    <div>
      <Box sx={boxStyle}>
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={props.handleDisplay}>
          Search...
        </Button>
      </Box>
      <Box sx={IconStyle}>
        <IconButton onClick={handleFormShow}>
          <AddLocationAltIcon />
        </IconButton>
      </Box>
      {isFormOpen && (
        <AddSeichiInfoModal onClose={handleFormShow}>
          <GuideToGoogleForm />
        </AddSeichiInfoModal>
      )}
      <Stack direction="row" spacing={2} sx={stackStyle}>
        <UserTitleList {...{ userTitleList, setUserTitleList }} />
      </Stack>
      {props.isShow && props.children}
    </div>
  );
};

type UserTitleListProps = {
  userTitleList: string[];
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const UserTitleList: VFC<UserTitleListProps> = (props) => {
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

const GuideToGoogleForm = () => {
  return (
    <>
      <h3>おぉ！、お主はAniMapの完成のために、聖地情報を提供してくれるのじゃな！？</h3>
      <Button
        variant="outlined"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfKB1qmh6uJ1jaUKl-3cy9NSFoB0O2vHDEtM8F4hjlOR8-EkQ/viewform?usp=sf_link"
      >
        もちろん！！
      </Button>
    </>
  );
};
