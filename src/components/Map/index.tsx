import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { VFC } from "react";
import { useMapSettings } from "./map.hooks";

type Props = {
  GoogleMapComponent: JSX.Element;
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
        {props.GoogleMapComponent}
      </GoogleMap>
    </main>
  );
};
