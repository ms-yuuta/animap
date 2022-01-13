import React, { useState, VFC } from "react";
import dynamic from "next/dynamic";
import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useHandleDisplay, useHandleKeyEvent } from "hooks/useHandler";
import { AniMapModal } from "components/Common/Modal";
import { Loading } from "components/Common/Loading";
const DynamicSearchScreen = dynamic(() => import("../SearchScreen/SearchScreen"), {
  loading: () => <Loading />,
});

type ButtonProps = {
  userTitleList: string[];
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SearchButtonSet: VFC<ButtonProps> = (props) => {
  const { userTitleList, setUserTitleList } = props;
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
          <DynamicSearchScreen {...{ setUserTitleList, setIsShow, userTitleList }} />
        </AniMapModal>
      )}
    </>
  );
};

export const AddSeichiButtonSet: VFC = () => {
  const [isFormOpen, setIsFromOpen] = useState(false);
  const handleFormShow = useHandleDisplay(setIsFromOpen);
  return (
    <>
      <IconButton aria-label="open-modal" onClick={handleFormShow}>
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
