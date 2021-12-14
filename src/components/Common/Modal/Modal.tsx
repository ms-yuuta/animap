import React, { VFC, FC } from "react";
import { Box, Button, Modal } from "@mui/material";

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
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
};

export const AniMapModal: FC<ModalProps> = (props) => {
  return (
    <Modal
      open={true}
      onClose={props.onClose}
      aria-labelledby="animap-modal"
      aria-describedby="modal-modal-animap"
    >
      <Box sx={style}>{props.children}</Box>
    </Modal>
  );
};
