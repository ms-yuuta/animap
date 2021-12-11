import React, { VFC } from "react";
import { Box, Button, Modal } from "@mui/material";
import { List } from "@mui/material";

type ModalProps = {
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

export const ModalForSearch: VFC<ModalProps> = (props) => {
  return (
    <Modal
      open={true}
      onClose={props.handleDisplay}
      aria-labelledby="seichi-modal"
      aria-describedby="modal-search-seichi"
    >
      <Box sx={style}>{props.children}</Box>
    </Modal>
  );
};

import { InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TitleList } from "./TitleList";
import { useSearchAnime } from "./useSearchAnime.hooks";

type Props = {
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchScreen: VFC<Props> = (props) => {
  const { text, regex, handleChange } = useSearchAnime();
  return (
    <>
      <Stack direction="column" spacing={2}>
        <TextField
          variant="outlined"
          placeholder="Search Anime..."
          fullWidth
          size="small"
          type="text"
          autoFocus={true}
          color="primary"
          value={text}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* <Button variant="outlined" onClick={() => handleClick()}>
          保存
        </Button> */}
        <List disablePadding sx={{ overflow: "auto", maxHeight: "50vh" }}>
          <TitleList regex={regex} {...props} />
        </List>
      </Stack>
    </>
  );
};
