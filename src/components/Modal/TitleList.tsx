import { memo, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { List, ListSubheader } from "@mui/material";

import { Title } from "model";
import { handleDelete } from "hooks/useHandler";
import { ListItemComponent } from "components/ListItem/ListItem";
import { useDefaultList, useEffectStorage } from "./TitleList.hooks";

type Props = {
  regex: RegExp | undefined;
  handleClick: (title: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => void;
};

export const TitleList: React.VFC<Props> = (props) => {
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
        <MemorizedDefaultList
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
              <ListItemComponent
                key={item.work_id}
                type="normal"
                label={item.work}
                handleClick={() => props.handleClick(item.work, setHistoryList)}
              />
            ) : null;
          })}
        </div>
      )}
    </List>
  );
};

type DefaultItem = {
  label: string;
  list: string[];
};

type DefaultProps = {
  handleClick: (title: string, setState: any) => void;
  historyList: string[];
  setHistoryList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const DefaultList = (props: DefaultProps) => {
  const { historyList, handleClick, setHistoryList } = props;
  const defaultList = useDefaultList(historyList);
  useEffectStorage(historyList, setHistoryList);

  return (
    <>
      {defaultList.map((obj: DefaultItem) => {
        return (
          <div key={obj.label}>
            <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
              {obj.label}
            </ListSubheader>
            {obj["list"].map((title) => {
              return (
                <ListItemComponent
                  key={title}
                  type={obj.label}
                  label={title}
                  handleClick={() => handleClick(title, setHistoryList)}
                  handleDelete={() => handleDelete(title, setHistoryList)}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

const MemorizedDefaultList = memo(DefaultList);
