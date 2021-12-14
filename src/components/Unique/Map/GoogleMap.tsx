import { useMemo, VFC } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import { useMarkerColor } from "./GoogleMap.hooks";

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

export const Map: VFC<Props> = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>loading....</div>;
  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

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
  const divideMarkerColor = useMarkerColor(userTitleList);
  const { data, error } = useFetchSeichiData();
  const userSeichiData = useMemo(
    () => data?.filter(({ title }) => userTitleList.includes(title)),
    [userTitleList, data]
  );

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!data) {
    return <h2>Now Loading....</h2>;
  }

  return (
    <>
      {userTitleList.length > 0
        ? userSeichiData?.map((seichi) => {
            const color = divideMarkerColor(seichi.title);
            return <SeichiMarker key={seichi.id} {...{ seichi, color }} />;
          })
        : null}
    </>
  );
};
