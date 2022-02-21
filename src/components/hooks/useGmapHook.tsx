import { SampleDataModel } from "components/model/SampleData";
import React, { useState } from "react";

export const useGmapHook = () => {
  const [sampleGmapdata, setSampleGmapData] = useState<SampleDataModel[]>([
    {
      name: "Ayala Malls Solenad",
      lat: 14.238575240097216,
      lng: 121.05733375369125,
    },
    {
      name: "Ayala Malls Serin",
      lat: 14.112940450425851,
      lng: 120.95907862683761,
    },
    {
      name: "Glorietta by Ayala Malls",
      lat: 14.551518726282177,
      lng: 121.02524774218038,
    },
    {
      name: "Globe Telecom Plaza Tower 2",
      lat: 14.571844913140618,
      lng: 121.04994839743152,
    },
    {
      name: "The Globe Tower",
      lat: 14.553819180883613,
      lng: 121.04995225510267,
    },
    {
      name: "Shangri-La The Fort, Manila",
      lat: 14.552647743885526,
      lng: 121.04683848393846,
    },
  ]);

  const [selectedGmapData, setSelectedGmapData] = useState<SampleDataModel>(
    sampleGmapdata[0]
  );
  return { selectedGmapData, setSelectedGmapData, sampleGmapdata };
};
