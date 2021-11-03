import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoogleMapComponent } from "components/Map/GoogleMapComponent";
import { useMapSettings } from "./map.hooks";

export const Map = () => {
  const mapSettings = useMapSettings();

  return (
    <main>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapSettings.containerStyle}
          center={mapSettings.center}
          zoom={6}
        >
          <GoogleMapComponent />
        </GoogleMap>
      </LoadScript>
    </main>
  );
};
