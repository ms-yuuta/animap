import { SearchBox } from "./SearchBox";
import { CandidatesLists } from "./CandidatesLists";
import { useSerachAnime } from "../../hooks/useSearchAnime";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { workListState } from "../../atoms/workListAtom";

export const SearchScreen: React.VFC = () => {
  const setWorkListValue: SetterOrUpdater<string[]> =
    useSetRecoilState(workListState);
  const { regex, text, handleChange, handleClick, handleAddAnime } =
    useSerachAnime(setWorkListValue);

  return (
    <div>
      <SearchBox
        text={text}
        handleChange={handleChange}
        handleClick={handleClick}
        handleAddAnime={handleAddAnime}
      />
        <CandidatesLists regex={regex} handleAddAnime={handleAddAnime} />
    </div>
  );
};
