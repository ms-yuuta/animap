import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import { GoogleMapComponent } from "components/Main/GoogleMapComponent";

export const Main = () => {
  const mapSettings = useMemo(() => {
    const containerStyle = {
      width: "100%",
      height: "100vh",
    };

    const center = {
      lat: 38.2,
      lng: 139.77521,
    };

    return { containerStyle, center };
  }, []);

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
