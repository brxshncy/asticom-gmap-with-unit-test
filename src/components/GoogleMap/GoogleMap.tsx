import React from "react";
import GoogleMapReact from "google-map-react";
import { useGmapHook } from "components/hooks/useGmapHook";
import GMAP from "components/config/gmap.config";
import { GoogleMapMarker } from "./GoogleMapMarker";
import { useGmapContext } from "components/context/GoogleMapMarkerContextProvider";

export const GoogleMap = () => {
  const { selectedGmapState } = useGmapContext();
  const { selectedGmapData } = selectedGmapState;
  const { lat, lng } = selectedGmapData;
  const { apiKey } = GMAP;

  console.log("new lat >>", lat);
  console.log("new lng >>", lng);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat, lng }}
        defaultZoom={11}
      >
        <GoogleMapMarker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};
