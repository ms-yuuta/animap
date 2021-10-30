import { SearchBox } from "./SearchBox";
import { CandidatesList } from "./CandidatesList";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { useSerachAnime } from "hooks/useSearchAnime";
import { workListState } from "atoms/workListAtom";

export const SearchScreen: React.VFC = () => {
  const setWorkListValue: SetterOrUpdater<string[]> =
    useSetRecoilState(workListState);
  const { regex, text, handleChange, handleClick } =
    useSerachAnime(setWorkListValue);

  return (
    <div>
      <SearchBox
        text={text}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <CandidatesList regex={regex} handleClick={handleClick} />
    </div>
  );
};
