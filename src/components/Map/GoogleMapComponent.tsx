import { useRecoilValue } from "recoil";
import { titleListState } from "atoms/titleListState";
import { useFetchSeichi } from "hooks/useFetchArray";
import { DisplaySeichi } from "components/Map/DisplaySeichi";

export const GoogleMapComponent = () => {
  const { data, error, isLoading } = useFetchSeichi();
  const titleList = useRecoilValue(titleListState);

  if (isLoading) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.map((item) => {
        return titleList.length > 0 ? (
          <div key={item.id}>
            <DisplaySeichi item={item} />
          </div>
        ) : null;
      })}
    </div>
  );
};
