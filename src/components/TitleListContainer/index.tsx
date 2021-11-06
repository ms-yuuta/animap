import React, { useCallback, VFC } from "react";
import { Box, Button, Chip, Stack, Theme } from "@mui/material";
import { TitleChip } from "./Chip";
import { useChipBgColor, useDeleteChip } from "./chip.hooks";

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

type Props = {
  isShow: boolean;
  children: JSX.Element;
  handleDisplay: () => void;
  titleList: string[];
  setTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleListContainer: VFC<Props> = (props) => {
  const handleDelete = useDeleteChip(props.setTitleList);
  const chipBgColor = useChipBgColor();
  return (
    <div>
      <Box sx={boxStyle}>
        <Button variant="outlined" onClick={props.handleDisplay}>
          Search...
        </Button>
      </Box>
      <Stack direction="row" spacing={2} sx={stackStyle}>
        {props.titleList.map((title: string, i: number) => {
          return (
            <TitleChip
              key={title}
              chip={
                <Chip
                  label={title}
                  onDelete={() => {
                    handleDelete(i);
                  }}
                  sx={{
                    boxShadow: 2,
                    bgcolor: (theme: Theme) => chipBgColor(i),
                  }}
                />
              }
            />
          );
        })}
      </Stack>
      {props.isShow ? props.children : null}
    </div>
  );
};