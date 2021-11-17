import { useFetchSeichi } from "hooks/useFetchArray";
import { SeichiMarker } from "components/Map/SeichiMarker";

export const GoogleMapComponent = (props: { userTitleList: string[] }) => {
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
        return props.userTitleList.length > 0 ? (
          <div key={item.id}>
            <SeichiMarker userTitleList={props.userTitleList} item={item} />
          </div>
        ) : null;
      })}
    </div>
  );
};
