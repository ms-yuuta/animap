import "../../App.css";
import { CloseButton } from "./CloseButton";
import { SearchScreen } from "./SearchScreen";

export const Modal = (props) => {
  return (
    <div className="overlay">
      <div className="content">
        <SearchScreen setWorkList={props.setWorkList} />
        <CloseButton setIsShow={props.setIsShow} />
      </div>
    </div>
  );
};
