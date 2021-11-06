import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { VFC } from "react";
import { useMapSettings } from "./map.hooks";

type Props = {
  GoogleMapComponent: JSX.Element;
}

export const Map: VFC<Props> = (props) => {
  const mapSettings = useMapSettings();

  return (
    <main>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapSettings.containerStyle}
          center={mapSettings.center}
          zoom={6}
        >
          {props.GoogleMapComponent}
        </GoogleMap>
      </LoadScript>
    </main>
  );
};
