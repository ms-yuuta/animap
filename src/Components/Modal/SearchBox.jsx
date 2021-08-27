import "../../App.css";

export const SearchBox = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.text}
        onChange={props.handleChange}
        onKeyPress={props.handleAddAnime}
        className="text"
        autoFocus={true}
      ></input>
      <button onClick={props.handleClick} className="btn right">
        保存
      </button>
    </div>
  );
};
