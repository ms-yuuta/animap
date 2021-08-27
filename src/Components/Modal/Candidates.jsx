import "../../App.css";
import { useWorks } from "../../hooks/useFetchArray";

export const Candidates = (props) => {
  const { data, error, isLoading } = useWorks();

  if (isLoading) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="yScrollContent">
      <ul className="list">
        {data?.map((item) => {
          return props.regex?.test(item.work) ? (
            <li key={item.work} onClick={props.handleAddAnime} className="work candidates">
              {item.work}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};
