import { VFC } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import LinearProgress from "@mui/material/LinearProgress";
import { useFilterSeichi, useMarkerColor } from "./GoogleMap.hooks";

const MAP_SETTINGS = {
  CONTAINER_STYLE: {
    width: "100%",
    height: "100vh",
  },
  CENTER: {
    lat: 38.2,
    lng: 139.77521,
  },
};

type Props = {
  userTitleList: string[];
};

const Map: VFC<Props> = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <LinearProgress />;
  if (loadError) throw new Error("Map cannot be loaded right now, sorry.");

  return (
    <GoogleMap
      mapContainerStyle={MAP_SETTINGS.CONTAINER_STYLE}
      center={MAP_SETTINGS.CENTER}
      zoom={6}
    >
      <MapContent {...props} />
    </GoogleMap>
  );
};

import { SeichiMarker } from "components/Unique/Map/SeichiMarker";
import { useFetchSeichiData } from "./GoogleMap.hooks";

export const MapContent = (props: { userTitleList: string[] }) => {
  const { userTitleList } = props;
  const { data, error } = useFetchSeichiData();
  const userSeichiData = useFilterSeichi(data, userTitleList);
  const divideMarkerColor = useMarkerColor(userTitleList);

  if (error) throw new Error("聖地に関するデータが取得できませんでした");

  if (!data || userTitleList.length === 0) return null;

  return (
    <>
      {userSeichiData?.map(({ id, place, latitude, longitude, ...other }) => {
        const color = divideMarkerColor(other.title);
        return <SeichiMarker key={id} {...{ id, place, latitude, longitude, color }} />;
      })}
    </>
  );
};

export default Map;