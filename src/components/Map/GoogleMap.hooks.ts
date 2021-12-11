import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
import { Seichi } from "model";

export const useFetchSeichiData = () => {
  const { data, error } = useSWRImmutable<Seichi[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}?type=seichiList`
  );
  return { data, error };
};

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

  return mapSettings;
};

export const useMarkerColor = (userTitleList: string[]) => {
  const divideMarkerColor = (title: string) => {
    const index = userTitleList.indexOf(title);
    const colors = ["pink", "blue", "yellow", "green", "purple"];
    return colors[index];
  };
  return divideMarkerColor;
};
