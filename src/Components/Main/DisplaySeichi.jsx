import "../../App.css";
import { InfoWindow } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

export const DisplaySeichi = (props) => {
  const [index, setIndex] = useState(null);

  const divStyle = useMemo(() => {
    const colors = ["white", "pink", "lightblue", "yellow", "springgreen"];
    return { backgroundColor: colors[index], fontSize: "3px" };
  }, [index]);

  useEffect(() => {
    setIndex(props.array.indexOf(props.item.work));
  }, [props.array, props.item]);

  switch (index) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4: {
      return (
        <InfoWindow position={props.position} key={props.item.id}>
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
