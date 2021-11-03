import { InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { markerSeichiState } from "atoms/markerSeichiAtom";
import { titleListState } from "atoms/titleListState";
import { Seichi } from "model";

type Props = {
  item: Seichi;
};

export const DisplaySeichi: React.VFC<Props> = (props) => {
  const [index, setIndex] = useState<number | null>(null);
  const [selectedMarker, setMarker] = useRecoilState(markerSeichiState);
  const titleList = useRecoilValue(titleListState);

  useEffect(() => {
    setIndex(titleList.indexOf(props.item.work));
  }, [titleList, props.item]);

  const markerColor = useMemo(() => {
    const colors = ["pink", "blue", "yellow", "green", "purple"];
    return index === null ? "" : colors[index];
  }, [index]);

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
          onClick={() => {
            setMarker(props.item.place);
          }}
        >
          {selectedMarker && selectedMarker == props.item.place && (
            <InfoWindow
              onCloseClick={() => {
                setMarker("");
              }}
            >
              <div>
                {/* <Link href={"/seichi/" + props.item.id}>
                </Link> */}
                <h5 style={{margin : 0}}>{props.item.place}</h5>
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
