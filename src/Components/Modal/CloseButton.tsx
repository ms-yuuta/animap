import { Button } from "@mui/material";
import { useHandleDisplay } from "../../hooks/useHandleDisplay";

export const CloseButton: React.VFC = () => {
  const handleDisplay = useHandleDisplay();
  return (
    <Button size="medium" variant="outlined" onClick={handleDisplay}>
      CLOSE
    </Button>
  );
};
