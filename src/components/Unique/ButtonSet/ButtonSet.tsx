import React, { useState, VFC } from "react";
import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";
import { AniMapModal } from "components/Common/Modal";
import { SearchScreen } from "components/Unique/SearchScreen";

type ButtonProps = {
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TheSearchButtonSet: VFC<ButtonProps> = (props) => {
  const { setUserTitleList } = props;
  const [isShow, setIsShow] = useState(false);
  const handleSearchModal = useHandleDisplay(setIsShow);
  useHandleKeyEvent(setIsShow);

  return (
    <>
      <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearchModal}>
        Search...
      </Button>
      {isShow && (
        <AniMapModal onClose={handleSearchModal}>
          <SearchScreen setUserTitleList={setUserTitleList} setIsShow={setIsShow} />
        </AniMapModal>
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
        <AniMapModal onClose={handleFormShow}>
          <GuideToGoogleForm />
        </AniMapModal>
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
