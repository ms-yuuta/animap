import React, { VFC } from "react";
import { InputAdornment, Stack, TextField, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TitleList } from "components/Unique/TitleList";
import { useSearchAnime } from "./searchAnimeTitle.hooks";

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
