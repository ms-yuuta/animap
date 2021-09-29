import "../../App.css";
import { SearchBox } from "./SearchBox";
import { Candidates } from "./Candidates";
import { useSerachAnime } from "../../hooks/useSearchAnime";

type Props = {
  setWorkList: any
}

export const SearchScreen: React.VFC<Props> = (props) => {
  const { regex, text, handleChange, handleClick, handleAddAnime } =
    useSerachAnime(props.setWorkList);

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
