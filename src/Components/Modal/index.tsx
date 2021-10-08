import * as React from "react";
import { CloseButton } from "./CloseButton";
import { SearchScreen } from "./SearchScreen";
import { Box, Modal } from "@mui/material";
import { useRecoilState } from "recoil";
import { isShowState } from "../../atoms/isShowAtom";

export const ModalForSearch: React.VFC = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [isShow, setIsShow] = useRecoilState(isShowState);
  const handleDisplay = React.useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, [setIsShow]);

  return (
    <div>
      <Modal
        open={isShow}
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
