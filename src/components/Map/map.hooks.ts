import { useMemo } from "react";

export const useMapSettings = () => {

  const mapSettings = useMemo(() => {
    const containerStyle = {
      width: "100%",
      height: "100vh",
    };
  
    const center = {
      lat: 38.2,
      lng: 139.77521,
    };
  
    return { containerStyle, center };
  }, []);

  return mapSettings
}

export const useMarkerColor =(index: number) => {

  const markerColor = useMemo(() => {
    const colors = ["pink", "blue", "yellow", "green", "purple"];
    return index === null ? "" : colors[index];
  }, [index]);

  return markerColor;
}  

  
