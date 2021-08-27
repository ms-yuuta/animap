import "../../App.css";
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
        {props.workList.map((item) => {
          return (
            <li key={item} className="work circle small bgWhite lightShadow">
              <p className="paragraph">
                {item}
                <span className="span"> </span>
                <span onClick={handleDisplay} className="delete">
                  ×
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
