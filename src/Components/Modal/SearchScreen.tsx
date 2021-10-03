import "../../App.css";
import { SearchBox } from "./SearchBox";
import { Candidates } from "./Candidates";
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
      <div className="verticalScroll">
        <Candidates regex={regex} handleAddAnime={handleAddAnime} />
      </div>
    </div>
  );
};
