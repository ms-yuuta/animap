import { SeichiMarker } from "components/Map/SeichiMarker";
import { Seichi } from "model";
import useSWRImmutable from "swr/immutable";

export const GoogleMapComponent = (props: { userTitleList: string[] }) => {
  const { data, error } = useSWRImmutable<Seichi[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=seichiList`
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
        return props.userTitleList.length > 0 ? (
          <div key={`${item.place}-${item.id}`}>
            <SeichiMarker userTitleList={props.userTitleList} item={item} />
          </div>
        ) : null;
      })}
    </div>
  );
};
