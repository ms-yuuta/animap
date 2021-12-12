import { VFC } from "react";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  GoogleMap: JSX.Element;
  UserTitleList: JSX.Element;
  TheSearchButtonSet: JSX.Element;
  TheAddSeichiButtonSet: JSX.Element;
};

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

export const MapLayout: VFC<Props> = (props) => {
  const { TheSearchButtonSet, TheAddSeichiButtonSet, UserTitleList, GoogleMap } = props;
  return (
    <LayoutErrorBoundary>
      <Box height="100vh" width="100%">
        <main>
          <Box sx={boxStyle}>{TheSearchButtonSet}</Box>
          <Box sx={IconStyle}>{TheAddSeichiButtonSet}</Box>
          <Stack direction="row" spacing={2} sx={stackStyle}>
            {UserTitleList}
          </Stack>
          {GoogleMap}
        </main>
      </Box>
    </LayoutErrorBoundary>
  );
};
