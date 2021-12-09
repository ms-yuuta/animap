import { memo, MouseEventHandler, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { List, ListSubheader } from "@mui/material";

import { Title } from "model";
import { ListItemComponent } from "components/ListItem/ListItem";
import { useDefaultList, useEffectStorage, useHandleClick } from "./titleList.hooks";

type Props = {
  regex: RegExp | undefined;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleList: React.VFC<Props> = (props) => {
  const { data, error } = useSWRImmutable<Title[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=workList`
  );

  const clickData = useHandleClick(props.setIsShow, props.setUserTitleList);

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <List disablePadding sx={{ overflow: "auto", maxHeight: "50vh" }}>
      {props.regex === undefined ? (
        <MemorizedDefaultList {...clickData} />
      ) : (
        <div>
          <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
            anime title
          </ListSubheader>
          {data?.map(({ work, work_id }) => {
            return props.regex?.test(work) ? (
              <ListItemComponent
                key={work_id}
                type="normal"
                label={work}
                onClick={clickData.handleClick}
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
  historyList: string[];
  setHistoryList: React.Dispatch<React.SetStateAction<string[]>>;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

export const DefaultList: React.VFC<DefaultProps> = (props) => {
  const { historyList, setHistoryList, handleClick } = props;
  const defaultList = useDefaultList(historyList);
  useEffectStorage(historyList, setHistoryList);
  const handleDelete = (name: string) => {
    setHistoryList((prevList: string[]) => prevList.filter((item) => item !== name));
  };

  console.log(historyList);

  return (
    <>
      {defaultList.map(({ label, list }: DefaultItem) => {
        return (
          <div key={label}>
            <ListSubheader color="primary" disableSticky sx={{ height: "36px" }}>
              {label}
            </ListSubheader>
            {list.map((title) => {
              return (
                <ListItemComponent
                  key={title}
                  type={label}
                  label={title}
                  onClick={handleClick}
                  onDelete={() => handleDelete(title)}
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
