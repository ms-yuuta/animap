import { ReactNode, VFC } from "react";
import { Box } from "@mui/system";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  children: ReactNode;
};

export const MapLayout: VFC<Props> = ({ children }) => {
  return (
    <Box height="100vh" width="100%">
      <main>
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      </main>
    </Box>
  );
};
