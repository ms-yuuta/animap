import React from "react";
import { Item } from "components/Header/Item";
import { Button, Box, Stack } from "@mui/material";
import { useHandleDisplay } from "hooks/useHandleDisplay";
import { titleListState } from "atoms/titleListState";
import { useRecoilValue } from "recoil";
import { ModalForSearch } from "components/molecules/Modal";
import { isModalOpenState } from "atoms/isModalOpenState";

const boxStyle = {
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: "15rem",
  zIndex: "tooltip",
  bgcolor: "background.paper",
  marginTop: 1.6,
  borderRadius: 1,
} as const;

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

export const Header: React.FC = () => {
  const isOpen: boolean = useRecoilValue(isModalOpenState);
  const titleList = useRecoilValue(titleListState);
  const handleDisplay = useHandleDisplay();

  return (
    <header>
      <Box sx={boxStyle}>
        <Button variant="outlined" onClick={handleDisplay}>
          Search...
        </Button>
      </Box>
      <Stack direction="row" spacing={2} sx={stackStyle}>
        {titleList.map((title: string, i: number) => {
          return <Item title={title} index={i} key={title} />;
        })}
      </Stack>
      {isOpen ? <ModalForSearch /> : null}
    </header>
  );
};
