import useSWRImmutable from "swr/immutable";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Title } from "model";

type Props = {
  regex: RegExp | undefined;
  handleClick: (title?: string) => void;
};

export const CandidatesList: React.VFC<Props> = (props) => {
  const { data, error } = useSWRImmutable<Title[], Error>(
    "https://jsondata.okiba.me/v1/json/yJlau210827043212"
  );

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <List disablePadding sx={{ overflow: "auto", maxHeight: "50vh" }}>
      {data?.map((item) => {
        return props.regex?.test(item.work) ? (
          <ListItem disablePadding key={item.work_id}>
            <ListItemButton onClick={() => props.handleClick(item.work)}>
              <ListItemText primary={item.work} />
            </ListItemButton>
          </ListItem>
        ) : null;
      })}
    </List>
  );
};
