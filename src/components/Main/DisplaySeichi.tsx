import { InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { markerSeichiState } from "../../atoms/markerSeichiAtom";
import { workListState } from "../../atoms/workListAtom";
import { Seichi } from "../../model";

type Props = {
  item: Seichi;
  array: string[];
};

export const DisplaySeichi: React.VFC<Props> = (props) => {
  const [index, setIndex] = useState<number | null>(null);
  const [selectedMarker, setMarker] = useRecoilState(markerSeichiState);
  const workListValue = useRecoilValue(workListState);

  const divStyle = useMemo(() => {
    const colors = ["white", "pink", "lightblue", "yellow", "springgreen"];
    return index === null
      ? {}
      : { backgroundColor: colors[index], fontSize: "3px" };
  }, [index]);

  useEffect(() => {
    setIndex(workListValue.indexOf(props.item.work));
  }, [workListValue, props.item]);

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
              <div style={divStyle}>
                {/* <Link href={"/seichi/" + props.item.id}>
                </Link> */}
                  {props.item.place}
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
