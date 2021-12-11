import { memo, MouseEventHandler, useMemo } from "react";

import { ListItemComponent } from "components/List/ListItem/ListItem";
import { ListComponent } from "components/List/List";
import {
  useFetchTitleList,
  useDefaultList,
  useEffectStorage,
  useHandleClick,
} from "./titleList.hooks";

export type ListLabel = "trend" | "recent" | "search";

type Props = {
  regex: RegExp | undefined;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleList: React.VFC<Props> = (props) => {
  const { data, error } = useFetchTitleList();
  const clickData = useHandleClick(props.setIsShow, props.setUserTitleList);
  const filteredWork = useMemo(
    () => data?.filter(({ title }) => props.regex?.test(title)),
    [data, props.regex]
  );
  const candidateList = useMemo(
    () => (
      <ListComponent title="anime title">
        {filteredWork?.map(({ title, work_id }) => (
          <ListItemComponent
            key={work_id}
            type="search"
            label={title}
            onClick={clickData.handleClick}
          />
        ))}
      </ListComponent>
    ),
    [filteredWork, clickData.handleClick]
  );

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return <>{props.regex === undefined ? <MemorizedDefaultList {...clickData} /> : candidateList}</>;
};

type DefaultItem = {
  label: ListLabel;
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

  return (
    <>
      {defaultList.map(({ label, list }: DefaultItem) => (
        <ListComponent key={label} title={label}>
          {list.map((title) => (
            <ListItemComponent
              key={title}
              type={label}
              label={title}
              onClick={handleClick}
              onDelete={() => handleDelete(title)}
            />
          ))}
        </ListComponent>
      ))}
    </>
  );
};

const MemorizedDefaultList = memo(DefaultList);
