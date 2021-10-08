import { useCallback } from "react";
import { Item } from "./Item";
import React from "react";
import { SetterOrUpdater, useSetRecoilState, useRecoilValue } from "recoil";
import { workListState } from "../../atoms/workListAtom";
import { isShowState } from "../../atoms/isShowAtom";
import { Button, Box, Stack } from "@mui/material";

export const Header: React.FC = () => {
  const stackStyle = {
    overflow: "auto",
    py: 0,
    position: "absolute",
    top: 60,
    height: 50,
    maxWidth: "100%",
    zIndex: "appBar",
    px: 2,
  } as const;

  const boxStyle = {
    position: "absolute",
    top: 0,
    left: "15rem",
    zIndex: "tooltip",
    display: "inline-block",
  } as const;

  const setIsShow: SetterOrUpdater<boolean> = useSetRecoilState(isShowState);
  const workListValue = useRecoilValue(workListState);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
  }, [setIsShow]);

  return (
    <header>
      <Box mt={1.6} sx={boxStyle}>
        <Button variant="contained" color="primary" onClick={handleDisplay}>
          Search
        </Button>
      </Box>
      <Stack direction="row" spacing={0} sx={stackStyle}>
        {workListValue.map((item: string, i: number) => {
          return <Item item={item} index={i} />;
        })}
      </Stack>
    </header>
  );
};
