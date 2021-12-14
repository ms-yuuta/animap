import { memo, MouseEventHandler } from "react";

import { ListItemBar } from "components/Common/ListTable/ListItemBar";
import { ListTable } from "components/Common/ListTable";
import { CandidateList } from "./CandidateList";
import { useDefaultList, useEffectStorage, useHandleClick } from "./titleList.hooks";

export type ListLabel = "trend" | "recent" | "search";

type Props = {
  regex: RegExp | undefined;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setUserTitleList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TitleList: React.VFC<Props> = (props) => {
  const { regex, setIsShow, setUserTitleList } = props;
  const { historyList, setHistoryList, handleClick, handleDelete } = useHandleClick(
    setIsShow,
    setUserTitleList
  );
  useEffectStorage(historyList, setHistoryList);

  return (
    <>
      {regex === undefined ? (
        <MemorizedDefaultList {...{ historyList, handleClick, handleDelete }} />
      ) : (
        <CandidateList {...{ regex, handleClick }} />
      )}
    </>
  );
};

type DefaultItem = {
  label: ListLabel;
  list: string[];
};

type DefaultProps = {
  historyList: string[];
  handleClick: MouseEventHandler<HTMLDivElement>;
  handleDelete: (title: string) => void;
};

export const DefaultList: React.VFC<DefaultProps> = (props) => {
  const { historyList, handleClick, handleDelete } = props;
  const defaultList = useDefaultList(historyList);

  return (
    <>
      {defaultList.map(({ label, list }: DefaultItem) => (
        <ListTable key={label} title={label}>
          {list.map((title) => (
            <ListItemBar
              key={title}
              type={label}
              label={title}
              onClick={handleClick}
              onDelete={() => handleDelete(title)}
            />
          ))}
        </ListTable>
      ))}
    </>
  );
};

const MemorizedDefaultList = memo(DefaultList);
