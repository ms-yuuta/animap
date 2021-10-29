import { useWorks } from "../../hooks/useFetchArray";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  regex: RegExp | undefined;
  handleClick: (title?: string) => void;
};

export const CandidatesList: React.VFC<Props> = (props) => {
  const { data, error, isLoading } = useWorks();

  if (isLoading) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <List sx={{ py: 2, overflow: "auto", maxHeight: "55vh" }}>
      {data?.map((item => {
        return props.regex?.test(item.work) ? (
          <ListItem disablePadding key={item.work}>
            <ListItemButton onClick={() => props.handleClick(item.work)}>
              <ListItemText primary={item.work} />
            </ListItemButton>
          </ListItem>
        ) : null;
      }))}
    </List>
  );
};
