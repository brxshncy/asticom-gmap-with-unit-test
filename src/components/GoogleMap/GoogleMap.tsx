import GoogleMapReact from "google-map-react";
import GMAP from "components/config/gmap.config";
import { GoogleMapMarker } from "./GoogleMapMarker";
import { useGmapContext } from "components/context/GoogleMapMarkerContextProvider";

export const GoogleMap = () => {
  const { selectedGmapState } = useGmapContext();
  const { selectedGmapData } = selectedGmapState;
  const { lat, lng, name } = selectedGmapData;
  const { apiKey } = GMAP;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat, lng }}
        center={{ lat, lng }}
        defaultZoom={10}
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
      >
        <GoogleMapMarker lat={lat} lng={lng} name={name} />
      </GoogleMapReact>
    </div>
  );
};
