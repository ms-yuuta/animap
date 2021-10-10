import { CloseButton } from "./CloseButton";
import { SearchScreen } from "./SearchScreen";
import { Box, Modal } from "@mui/material";
import { useHandleDisplay } from "../../hooks/useHandleDisplay";

export const ModalForSearch: React.VFC = () => {
  const handleDisplay = useHandleDisplay();
  const style = {
    minWidth: 300,
    p: 4,
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleDisplay}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SearchScreen />
          <CloseButton />
        </Box>
      </Modal>
    </div>
  );
};
