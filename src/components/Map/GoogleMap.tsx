import { useMemo, VFC } from "react";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import { useMapSettings, useMarkerColor } from "./GoogleMap.hooks";

type Props = {
  userTitleList: string[];
};

export const Map: VFC<Props> = (props) => {
  const mapSettings = useMapSettings();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>loading....</div>;
  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return (
    <GoogleMap mapContainerStyle={mapSettings.containerStyle} center={mapSettings.center} zoom={6}>
      <MapContent {...props} />
    </GoogleMap>
  );
};

import { SeichiMarker } from "components/Map/SeichiMarker";
import { useFetchSeichiData } from "./GoogleMap.hooks";

export const MapContent = (props: { userTitleList: string[] }) => {
  const { userTitleList } = props;
  const divideMarkerColor = useMarkerColor(userTitleList);
  const { data, error } = useFetchSeichiData();
  const userSeichiData = useMemo(
    () => data?.filter(({ title }) => userTitleList.includes(title)),
    [userTitleList, data]
  );

  if (!data && !error) {
    return <h2>Now Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
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
