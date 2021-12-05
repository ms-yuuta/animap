import { SeichiMarker } from "components/Map/SeichiMarker";
import { Seichi } from "model";
import { VFC } from "react";
import useSWR from "swr";

type Props = { userTitleList: string[] };

export const GoogleMapComponent: VFC<Props> = (props) => {
  const { data, error } = useSWR<Seichi[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=seichiList`
  );

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (props.userTitleList.length === 0) {
    return null;
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
