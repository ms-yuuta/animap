import { Button, TextField, Stack } from "@mui/material";

type Props = {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => () => void;
  handleClick: (e: any) => () => void;
  handleAddAnime: any;
};

export const SearchBox: React.VFC<Props> = (props) => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          autoFocus={true}
          color="primary"
          value={props.text}
          onChange={props.handleChange}
        />
        <Button variant="outlined" onClick={props.handleClick}>
          保存
        </Button>
      </Stack>
    </div>
  );
};
