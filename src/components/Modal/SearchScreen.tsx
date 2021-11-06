import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { VFC } from "react";
import { CandidatesList } from "./CandidatesList";
import { useSearchAnime } from "./useSearchAnime.hooks";

type Props = {
  setTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SearchScreen: VFC<Props> = (props) => {
  const { handleChange, handleClick, text, regex } = useSearchAnime(props.setTitleList);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          autoFocus={true}
          color="primary"
          value={text}
          onChange={handleChange}
        />
        <Button variant="outlined" onClick={() => handleClick()}>
          保存
        </Button>
      </Stack>
      <Box py={2}>
        <CandidatesList regex={regex} handleClick={handleClick} />
      </Box>
    </div>
  );
};
