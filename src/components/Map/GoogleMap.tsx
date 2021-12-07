import { VFC } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import { useMapSettings } from "./GoogleMap.hooks";

type Props = {
  MapContent: JSX.Element;
};

export const Map: VFC<Props> = (props) => {
  const mapSettings = useMapSettings();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>loading....</div>;
  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return (
    <main>
      <GoogleMap
        mapContainerStyle={mapSettings.containerStyle}
        center={mapSettings.center}
        zoom={6}
      >
        {props.MapContent}
      </GoogleMap>
    </main>
  );
};


import useSWRImmutable from "swr/immutable";
import { Seichi } from "model";
import { SeichiMarker } from "components/Map/SeichiMarker";

export const MapContent = (props: { userTitleList: string[] }) => {
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
    <>
      {data?.map((item) => {
        return props.userTitleList.length > 0 ? (
          <div key={`${item.place}-${item.id}`}>
            <SeichiMarker userTitleList={props.userTitleList} item={item} />
          </div>
        ) : null;
      })}
    </>
  );
};