import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import { GoogleMapComponent } from "Components/Main/GoogleMapComponent";

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
      <LoadScript googleMapsApiKey="AIzaSyA0z5-r2o29M_pH7K3URo-mKOxiPJmWoCA">
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
