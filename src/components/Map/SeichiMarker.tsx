import { useEffect, useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { Seichi } from "model";
import { useMarkerColor } from "./GoogleMap.hooks";

type Props = {
  item: Seichi;
  userTitleList: string[];
};

export const SeichiMarker: React.VFC<Props> = (props) => {
  const { item, userTitleList } = props;
  const [index, setIndex] = useState<number>(-1);
  const [selectedMarker, setMarker] = useState("");
  const markerColor = useMarkerColor(index);

  useEffect(() => {
    setIndex(userTitleList.indexOf(item.work));
  }, [userTitleList, item.work]);

  switch (index) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4: {
      const position = { lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) };
      return (
        <Marker
          key={`${item.place}-${item.id}`}
          position={position}
          cursor={item.place}
          icon={`https://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`}
          onClick={() => setMarker(item.id)}
          onMouseOver={() => setMarker(item.id)}
          onMouseOut={() => setMarker("")}
        >
          {selectedMarker && selectedMarker == item.id && (
            <InfoWindow onCloseClick={() => setMarker("")}>
              <div>
                {/* <Link href={"/seichi/" + item.id}></Link> */}
                <h5 style={{ margin: 0 }}>{item.place}</h5>
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
