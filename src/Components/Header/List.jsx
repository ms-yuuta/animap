import "../../App.css";
import cc from "classcat";
export const List = (props) => {
  console.log(props.index);
  return (
    <li key={props.item} className="work circle small bgWhite lightShadow">
      <p
        className={cc([
          "paragraph",
          {
            pink: props.index === 1,
            lightblue: props.index === 2,
            yellow: props.index === 3,
            springgreen: props.index === 4,
          },
        ])}
      >
        {props.item}
        <span className="span"> </span>
        <span onClick={props.handleDisplay} className="delete">
          ×
        </span>
      </p>
    </li>
  );
};
