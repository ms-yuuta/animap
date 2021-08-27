import "../../App.css";
import { useSeichi } from "../../hooks/useFetchArray";
import { DisplaySeichi } from "./DisplaySeichi";

export const GoogleMapComponent = (props) => {
  const { data, error, isLoading } = useSeichi();

  if (isLoading) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.map((item) => {
        const position = {
          lat: item.latitude,
          lng: item.longitude,
        };
        return props.workList.length > 0 ? (
          <div key={item.id}>
            <DisplaySeichi
              position={position}
              item={item}
              array={props.workList}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};
