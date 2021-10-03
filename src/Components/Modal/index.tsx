import "../../App.css";
import { CloseButton } from "./CloseButton";
import { SearchScreen } from "./SearchScreen";

export const Modal: React.VFC = () => {  
  return (
    <div className="overlay">
      <div className="content">
        <SearchScreen />
        <CloseButton />
      </div>
    </div>
  );
};
