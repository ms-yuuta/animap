import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";

const boxStyle = {
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Loading = () => {
  return (
    <Box sx={boxStyle}>
      <CircularProgress />
    </Box>
  );
};
