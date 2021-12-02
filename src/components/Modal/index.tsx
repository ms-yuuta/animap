import { Box, Button, Modal } from "@mui/material";
import { VFC } from "react";

type Props = {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  handleDisplay: () => void;
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

export const ModalForSearch: VFC<Props> = (props) => {
  return (
    <Modal
      open={true}
      onClose={props.handleDisplay}
      aria-labelledby="seichi-modal"
      aria-describedby="modal-search-seichi"
    >
      <Box sx={style}>
        {props.children}
        <Button size="medium" variant="outlined" onClick={props.handleDisplay}>
          CLOSE
        </Button>
      </Box>
    </Modal>
  );
};
