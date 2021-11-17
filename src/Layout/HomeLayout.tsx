import { Box } from "@mui/system";
import { ReactNode, VFC } from "react";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  children: ReactNode;
};

export const HomeLayout: VFC<Props> = ({ children }) => {
  return (
    <Box height="100vh" width="100%">
      <main>
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      </main>
    </Box>
  );
};
