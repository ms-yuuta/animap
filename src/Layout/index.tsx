import { Box } from "@mui/system";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <Box height="100vh" width="100%">
      <main>{children}</main>
    </Box>
  );
};
