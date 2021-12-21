import React, { FC } from "react";
import { Box, Modal } from "@mui/material";

type ModalProps = {
  children: JSX.Element;
  onClose: () => void;
};

const style = {
  maxWidth: 500,
  width: "50%",
  minWidth: 230,
  maxHeight: "70%",
  p: 4,
  position: "absolute" as "absolute",
  top: "18%",
  left: "50%",
  transform: "translate(-50%)",
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
};

export const AniMapModal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="animap-modal"
      aria-describedby="modal-modal-animap"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
