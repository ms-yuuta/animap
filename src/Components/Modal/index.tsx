import "../../App.css";
import { CloseButton } from "./CloseButton";
import { SearchScreen } from "./SearchScreen";

type Props = {
  isShow: boolean;
  setIsShow: any;
  setWorkList: any;
};

export const Modal: React.VFC<Props> = (props) => {
  return (
    <div className="overlay">
      <div className="content">
        <SearchScreen setWorkList={props.setWorkList} />
        <CloseButton setIsShow={props.setIsShow} />
      </div>
    </div>
  );
};
