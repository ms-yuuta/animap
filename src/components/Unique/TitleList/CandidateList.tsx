import { MouseEventHandler } from "react";
import { ListTable } from "components/Common/ListTable";
import { ListItemBar } from "components/Common/ListTable/ListItemBar";
import { useFetchTitleList, useFilterWorkList } from "./titleList.hooks";

type CandidateProps = {
  regex: RegExp;
  handleClick: MouseEventHandler<HTMLDivElement>;
};
export const CandidateList: React.VFC<CandidateProps> = (props) => {
  const { regex, handleClick } = props;
  const { data, error } = useFetchTitleList();
  const filteredWork = useFilterWorkList(data, regex);

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!data) {
    return <h2>Now Loading....</h2>;
  }
  return (
    <ListTable title="anime title">
      {filteredWork?.map(({ title, work_id }) => (
        <ListItemBar key={work_id} type="search" label={title} onClick={handleClick} />
      ))}
    </ListTable>
  );
};
