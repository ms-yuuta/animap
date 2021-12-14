import { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { useFormalizePosition } from "./seichiMarker.hooks";

type Props = {
  id: string;
  place: string;
  latitude: string;
  longitude: string;
  color: string;
};

export const SeichiMarker: React.VFC<Props> = (props) => {
  const { id, place, latitude, longitude, color } = props;
  const [selectedMarker, setMarker] = useState("");
  const position = useFormalizePosition(latitude, longitude);

  return (
    <Marker
      key={`${place}-${id}`}
      position={position}
      cursor={place}
      icon={`https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`}
      onClick={() => setMarker(id)}
      onMouseOver={() => setMarker(id)}
      onMouseOut={() => setMarker("")}
    >
      {selectedMarker && selectedMarker == id && (
        <InfoWindow onCloseClick={() => setMarker("")}>
          <div>
            {/* <Link href={"/seichi/" + seichi.id}></Link> */}
            <h5 style={{ margin: 0 }}>{place}</h5>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};
