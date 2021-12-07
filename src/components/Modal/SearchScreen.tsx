import React, { VFC } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";

import SearchIcon from "@mui/icons-material/Search";
import { CandidatesList } from "./TitleList";
import { useSearchAnime } from "./useSearchAnime.hooks";

type Props = {
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchScreen: VFC<Props> = (props) => {
  const { handleChange, handleClick, text, regex } = useSearchAnime(
    props.setUserTitleList,
    props.setIsShow
  );
  return (
    <div>
      <Stack direction="row" spacing={2}>
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
      </Stack>
      <Box py={2}>
        <CandidatesList regex={regex} handleClick={handleClick} />
      </Box>
    </div>
  );
};
