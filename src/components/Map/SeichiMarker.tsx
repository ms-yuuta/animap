import { InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Seichi } from "model";
import { useMarkerColor } from "./map.hooks";

type Props = {
  item: Seichi;
  titleList: string[];
};

export const SeichiMarker: React.VFC<Props> = (props) => {
  const [index, setIndex] = useState<number>(-1);
  const [selectedMarker, setMarker] = useState("");
  const markerColor = useMarkerColor(index);

  useEffect(() => {
    setIndex(props.titleList.indexOf(props.item.work));
  }, [props]);

  switch (index) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4: {
      const position = { lat: props.item.latitude, lng: props.item.longitude };
      return (
        <Marker
          key={props.item.id}
          position={position}
          cursor={props.item.place}
          icon={`https://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`}
          onClick={() => setMarker(props.item.place)}
          onMouseOver={() => setMarker(props.item.place)}
          onMouseOut={() => setMarker("")}
        >
          {selectedMarker && selectedMarker == props.item.place && (
            <InfoWindow onCloseClick={() => setMarker("")}>
              <div>
                {/* <Link href={"/seichi/" + props.item.id}></Link> */}
                <h5 style={{ margin: 0 }}>{props.item.place}</h5>
              </div>
            </InfoWindow>
          )}
        </Marker>
      );
    }
    default:
      return null;
  }
};
