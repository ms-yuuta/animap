import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../../App.css";
import { GoogleMapComponent } from "./GoogleMapComponent";

export const Main = (props) => {

  const mapSettings = useMemo(() => {
    const containerStyle = {
      height: "100vh",
      width: "100%",
    };

    const center = {
      lat: 38.2,
      lng: 139.77521,
    };

    return { containerStyle, center };
  }, []);


  return (
    <main className="main">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapSettings.containerStyle}
          center={mapSettings.center}
          zoom={6}
        >
          <GoogleMapComponent workList={props.workList} />
        </GoogleMap>
      </LoadScript>
    </main>
  );
};
