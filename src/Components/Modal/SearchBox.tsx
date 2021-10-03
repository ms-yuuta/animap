import "../../App.css";

type Props = {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => () => void;
  handleClick: (e: any) => () => void;
  handleAddAnime: any;
};

export const SearchBox: React.VFC<Props> = (props) => {
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
