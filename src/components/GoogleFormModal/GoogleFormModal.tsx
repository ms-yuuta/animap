import { Box } from "@mui/system";
import { VFC } from "react";
import { Modal } from "@mui/material";

const style = {
  maxWidth: 500,
  width: "50%",
  minWidth: 230,
  maxHeight: "70%",
  p: 4,
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
};

type Props = {
  handleClose: () => void;
};

export const GoogleFormModal: VFC<Props> = (props) => {
  return (
    <Modal open={true} onClose={props.handleClose}>
      <Box sx={style}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfKB1qmh6uJ1jaUKl-3cy9NSFoB0O2vHDEtM8F4hjlOR8-EkQ/viewform?embedded=true"
          width="500"
          height="600"
        >
          読み込んでいます…
        </iframe>
      </Box>
    </Modal>
  );
};
