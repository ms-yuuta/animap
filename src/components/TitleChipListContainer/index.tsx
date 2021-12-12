import React, { useState, VFC } from "react";
import { Button, Chip, Theme, IconButton, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";
import { useChipBgColor, useDeleteChip } from "./chip.hooks";
import { AniMapModal as AddSeichiInfoModal } from "components/Modal";
import { AniMapModal as SearchAnimeTitleModal } from "components/Modal";
import { SearchScreen } from "components/SearchScreen/searchScreen";

type ButtonProps = {
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TheSearchButtonSet: VFC<ButtonProps> = (props) => {
  const [isShow, setIsShow] = useState(false);
  const { setUserTitleList } = props;
  const handleSearchModal = useHandleDisplay(setIsShow);
  useHandleKeyEvent(setIsShow);

  return (
    <>
      <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearchModal}>
        Search...
      </Button>
      {isShow && (
        <SearchAnimeTitleModal onClose={handleSearchModal}>
          <SearchScreen setUserTitleList={setUserTitleList} setIsShow={setIsShow} />
        </SearchAnimeTitleModal>
      )}
    </>
  );
};

export const TheAddSeichiButtonSet: VFC = () => {
  const [isFormOpen, setIsFromOpen] = useState(false);
  const handleFormShow = useHandleDisplay(setIsFromOpen);
  return (
    <>
      <IconButton onClick={handleFormShow}>
        <AddLocationAltIcon />
      </IconButton>
      {isFormOpen && (
        <AddSeichiInfoModal onClose={handleFormShow}>
          <GuideToGoogleForm />
        </AddSeichiInfoModal>
      )}
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
