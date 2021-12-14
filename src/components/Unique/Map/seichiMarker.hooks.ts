import { useMemo } from "react";

export const useFormalizePosition = (latitude: string, longitude: string) => {
  const position = useMemo(
    () => ({ lat: parseFloat(latitude), lng: parseFloat(longitude) }),
    [latitude, longitude]
  );
  return position;
};
