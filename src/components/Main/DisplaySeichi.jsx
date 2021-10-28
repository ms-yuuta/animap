import { InfoWindow } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { workListState } from "../../atoms/workListAtom";
import { atom } from "recoil";


const markerState = atom({
  key: "markerState",
  default: "",
});


export const DisplaySeichi = (props) => {
  const [index, setIndex] = useState(null);
  // const [selectedMarker, setMarker] = useRecoilState(markerState);
  const workListValue = useRecoilValue(workListState);

  const divStyle = useMemo(() => {
    const colors = ["white", "pink", "lightblue", "yellow", "springgreen"];
    return { backgroundColor: colors[index], fontSize: "3px" };
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
        <InfoWindow position={position} key={props.item.id}>
          <div style={divStyle}>
            <h1>{props.item.place}</h1>
          </div>
        </InfoWindow>
      );
    }
    default:
      return null;
  }
};

{
  /* {markers.map((marker: any) => (
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
          ))} */
}
