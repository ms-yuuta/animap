import { memo, MouseEventHandler, useMemo } from "react";
import { ListSubheader } from "@mui/material";

import { ListItemComponent } from "components/ListItem/ListItem";
import {
  useFetchTitleList,
  useDefaultList,
  useEffectStorage,
  useHandleClick,
} from "./titleList.hooks";

type Props = {
  regex: RegExp | undefined;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleList: React.VFC<Props> = (props) => {
  const { data, error } = useFetchTitleList();
  const clickData = useHandleClick(props.setIsShow, props.setUserTitleList);

  const candidateList = useMemo(
    () =>
      data?.map(({ work, work_id }) => {
        return props.regex?.test(work) ? (
          <ListItemComponent
            key={work_id}
            type="normal"
            label={work}
            onClick={clickData.handleClick}
          />
        ) : null;
      }),
    [data, clickData.handleClick, props.regex]
  );

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>{props.regex === undefined ? <MemorizedDefaultList {...clickData} /> : { candidateList }}</>
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
