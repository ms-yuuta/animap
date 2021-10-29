import { Item } from "./Item";
import React from "react";
import { workListState } from "../../atoms/workListAtom";
import { Button, Box, Stack } from "@mui/material";
import { useHandleDisplay } from "../../hooks/useHandleDisplay";
import { useRecoilValue } from "recoil";

export const Header: React.FC = () => {
  const workListValue = useRecoilValue(workListState);
  const handleDisplay = useHandleDisplay();

  const boxStyle = {
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: "15rem",
    zIndex: "tooltip",
    bgcolor: "background.paper",
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

  return (
    <header>
      <Box mt={1.6} sx={boxStyle}>
        <Button variant="outlined" onClick={handleDisplay}>
          Search...
        </Button>
      </Box>
      <Stack direction="row" spacing={2} sx={stackStyle}>
        {workListValue.map((item: string, i: number) => {
          return <Item item={item} index={i} key={item} />;
        })}
      </Stack>
    </header>
  );
};
