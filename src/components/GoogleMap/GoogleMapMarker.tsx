import React from "react";
import { HomeFilled } from "@ant-design/icons";
interface GoogleMapMarkerProps {
  lat: number;
  lng: number;
  name: string;
}

export const GoogleMapMarker: React.FC<GoogleMapMarkerProps> = ({
  lat,
  lng,
  name,
}) => {
  return (
    <div style={{ textAlign: "center", width: 120 }}>
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        <HomeFilled style={{ color: "red", fontSize: 20 }} />
      </div>
    </div>
  );
};
