import React from "react";
import { HomeFilled } from "@ant-design/icons";
interface GoogleMapMarkerProps {
  lat: number;
  lng: number;
}

export const GoogleMapMarker: React.FC<GoogleMapMarkerProps> = () => {
  return (
    <div>
      Marker Here
      <HomeFilled style={{ color: "red", fontSize: 20 }} />
    </div>
  );
};
