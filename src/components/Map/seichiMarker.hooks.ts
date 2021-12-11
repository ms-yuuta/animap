import { useMemo } from "react";

export const useFormalizePosition = (seichi: any) => {
  const position = useMemo(
    () => ({ lat: parseFloat(seichi.latitude), lng: parseFloat(seichi.longitude) }),
    [seichi.latitude, seichi.longitude]
  );
  return position;
};
