import "../../App.css";
import { List } from "./List";
export const Scroll = (props) => {
  const handleDisplay = (e) => {
    console.log(e);
    props.setWorkList((prevArray) => {
      return prevArray.filter(
        (item) => item !== e.target.previousSibling.previousSibling.textContent
      );
    });
  };
  return (
    <div className="scroll">
      <ul className="list horizontal xScrollContent">
        {props.workList.map((item, index) => {
          return <List handleDisplay={handleDisplay} item={item} index ={index}/>;
        })}
      </ul>
    </div>
  );
};
