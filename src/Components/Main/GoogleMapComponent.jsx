import { useRecoilValue } from "recoil";
import { workListState } from "../../atoms/workListAtom";
import { useSeichi } from "../../hooks/useFetchArray";
import { DisplaySeichi } from "./DisplaySeichi";

export const GoogleMapComponent = () => {
  const { data, error, isLoading } = useSeichi();
  const workListValue = useRecoilValue(workListState);

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
        return workListValue.length > 0 ? (
          <div key={item.id}>
            <DisplaySeichi
              position={position}
              item={item}
              array={workListValue}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};
