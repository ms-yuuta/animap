import { SeichiMarker } from "components/Map/SeichiMarker";
import { Seichi } from "model";
import useSWRImmutable from "swr/immutable";

export const GoogleMapComponent = (props: { titleList: string[] }) => {
  const { data, error } = useSWRImmutable<Seichi[], Error>(
    "https://jsondata.okiba.me/v1/json/VrDJ8210827043712"
  );

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.map((item) => {
        return props.titleList.length > 0 ? (
          <div key={`${item.place}-${item.id}`}>
            <SeichiMarker titleList={props.titleList} item={item} />
          </div>
        ) : null;
      })}
    </div>
  );
};
