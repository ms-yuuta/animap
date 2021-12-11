import { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { Seichi } from "model";
import { useFormalizePosition } from "./seichiMarker.hooks";

type Props = {
  seichi: Seichi;
  color: string;
};

export const SeichiMarker: React.VFC<Props> = (props) => {
  const { seichi, color } = props;
  const [selectedMarker, setMarker] = useState("");
  const position = useFormalizePosition(seichi);

  return (
    <Marker
      key={`${seichi.place}-${seichi.id}`}
      position={position}
      cursor={seichi.place}
      icon={`https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`}
      onClick={() => setMarker(seichi.id)}
      onMouseOver={() => setMarker(seichi.id)}
      onMouseOut={() => setMarker("")}
    >
      {selectedMarker && selectedMarker == seichi.id && (
        <InfoWindow onCloseClick={() => setMarker("")}>
          <div>
            {/* <Link href={"/seichi/" + seichi.id}></Link> */}
            <h5 style={{ margin: 0 }}>{seichi.place}</h5>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};
