import { useFetchSeichi } from "hooks/useFetchArray";
import { SeichiMarker } from "components/Map/SeichiMarker";

export const GoogleMapComponent = (props: { titleList: string[] }) => {
  const { data, error, isLoading } = useFetchSeichi();

  if (isLoading) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.map((item) => {
        return props.titleList.length > 0 ? (
          <div key={item.id}>
            <SeichiMarker titleList={props.titleList} item={item} />
          </div>
        ) : null;
      })}
    </div>
  );
};
