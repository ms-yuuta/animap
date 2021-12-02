import useSWRImmutable from "swr/immutable";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Title } from "model";

type Props = {
  regex: RegExp | undefined;
  handleClick: (title?: string) => void;
};

export const CandidatesList: React.VFC<Props> = (props) => {
  const { data, error } = useSWRImmutable<Title[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?sheet=workList`
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
