import { SearchBox } from "./SearchBox";
import { CandidatesList } from "./CandidatesList";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { useSerachAnime } from "hooks/useSearchAnime";
import { titleListState } from "atoms/titleListState";

export const SearchScreen: React.VFC = () => {
  const setTitleList: SetterOrUpdater<string[]> =
    useSetRecoilState(titleListState);
  const { regex, text, handleChange, handleClick } =
    useSerachAnime(setTitleList);

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
