import useSWRImmutable from "swr/immutable";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Title } from "model";
import HistoryIcon from "@mui/icons-material/History";
import ClearIcon from "@mui/icons-material/Clear";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { handleDelete, handleHistory } from "hooks/useHandler";

type Props = {
  regex: RegExp | undefined;
  handleClick: (title: string) => void;
};

export const CandidatesList: React.VFC<Props> = (props) => {
  const { data, error } = useSWRImmutable<Title[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=workList`
  );
  const [historyList, setHistoryList] = useState<string[]>([]);

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <List disablePadding sx={{ overflow: "auto", maxHeight: "50vh" }}>
      {props.regex === undefined ? (
        <MemorizedInitialList
          handleClick={props.handleClick}
          historyList={historyList}
          setHistoryList={setHistoryList}
        />
      ) : (
        <div>
          <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
            anime title
          </ListSubheader>
          {data?.map((item) => {
            return props.regex?.test(item.work) ? (
              <ListItem
                disablePadding
                key={item.work_id}
                sx={{ borderRadius: 1, ":hover": { bgcolor: "#9bc0ff" } }}
              >
                <ListItemButton
                  onClick={() => {
                    props.handleClick(item.work);
                    handleHistory(item.work, setHistoryList);
                  }}
                >
                  <ListItemText primary={item.work} />
                </ListItemButton>
              </ListItem>
            ) : null;
          })}
        </div>
      )}
    </List>
  );
};

type DefaultList = {
  label: string;
  list: string[];
};

type InitialProps = {
  handleClick: (title: string) => void;
  historyList: string[];
  setHistoryList: React.Dispatch<React.SetStateAction<string[]>>;
};

const trendList = ["鬼滅の刃", "ソードアート・オンライン"];

export const InitialList = (props: InitialProps) => {
  const { historyList, setHistoryList } = props;
  const defaultList = useMemo(() => {
    return historyList.length > 0
      ? [
          { label: "trend", list: [...trendList] },
          { label: "recent", list: [...historyList] },
        ]
      : [{ label: "trend", list: [...trendList] }];
  }, [historyList]);

  useEffect(() => {
    const storageString = localStorage.getItem("HistoryList");
    storageString && setHistoryList(storageString.split(","));
  }, []);

  useEffect(() => {
    () => localStorage.setItem("HistoryList", historyList.join(","));
  }, [historyList]);

  return (
    <>
      {defaultList.map((obj: DefaultList) => {
        return (
          <div key={obj.label}>
            <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
              {obj.label}
            </ListSubheader>
            {obj["list"].map((title) => {
              return (
                <ListItem
                  disablePadding
                  key={title}
                  sx={{ borderRadius: 1, ":hover": { bgcolor: "#9bc0ff" } }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(title, setHistoryList)}
                    >
                      <ClearIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    onClick={() => {
                      props.handleClick(title);
                      handleHistory(title, setHistoryList);
                    }}
                  >
                    <ListItemIcon>
                      {obj.label === "trend" ? <TrendingUpIcon /> : <HistoryIcon />}
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export const MemorizedInitialList = memo(InitialList);
