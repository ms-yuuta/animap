import React, { VFC } from "react";
import { InputAdornment, Stack, TextField, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TitleList } from "components/Unique/TitleList";
import { useSearchAnime } from "./searchAnimeTitle.hooks";

type Props = {
  userTitleList: string[];
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchScreen: VFC<Props> = (props) => {
  const { text, regex, handleChange } = useSearchAnime();
  return (
    <>
      <Stack direction="column" spacing={2}>
        <TextField
          id="text-field"
          aria-label="search-anime"
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
        <List disablePadding sx={{ overflow: "auto", maxHeight: "54vh" }}>
          <TitleList regex={regex} {...props} />
        </List>
      </Stack>
    </>
  );
};

export default SearchScreen;