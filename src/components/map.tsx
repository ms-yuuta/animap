// components/map.js
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import Link from "next/link";
import { atom, useRecoilState } from "recoil";

const markerState = atom({
  key: "markerState",
  default: "",
});

const containerStyle = {
  width: "100%",
  height: "50vh",
};

type Props = {
  zoom: number;
  markers: any;
  center: any;
};

export const Map = ({ zoom, markers, center }: Props) => {
  const [selectedMarker, setMarker] = useRecoilState(markerState);

  if (!markers) {
    return null;
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyA0z5-r2o29M_pH7K3URo-mKOxiPJmWoCA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {markers.map((marker: any) => (
          <Marker
            key={marker.id}
            position={marker}
            onClick={() => {
              setMarker(marker);
            }}
          >
            {selectedMarker && selectedMarker == marker && (
              <InfoWindow
                onCloseClick={() => {
                  setMarker("");
                }}
              >
                <Link href={"/stations/" + marker.id}>{marker.name}</Link>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
