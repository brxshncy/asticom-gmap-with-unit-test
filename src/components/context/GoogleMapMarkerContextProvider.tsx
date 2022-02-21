import { SampleDataModel } from "components/model/SampleData";
import React, { createContext, useContext, useReducer } from "react";
import { gmapReducer } from "./gmap-reducer";

const sampleGmapdata = [
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
];

interface InitialStateType {
  sampleGmapdata: SampleDataModel[];
  selectedGmapData: SampleDataModel;
}

const initialState = {
  sampleGmapdata,
  selectedGmapData: sampleGmapdata[0],
};

const GoogleMapContext = createContext<{
  selectedGmapState: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  selectedGmapState: initialState,
  dispatch: () => null,
});
export const useGmapContext = () => {
  let context = useContext(GoogleMapContext);
  if (context === undefined) {
    throw new Error(`No  Context Provider`);
  }

  return context;
};

export const GoogleMapMarkerContextProvider = ({ children }) => {
  const [selectedGmapState, dispatch] = useReducer(gmapReducer, initialState);

  return (
    <GoogleMapContext.Provider value={{ selectedGmapState, dispatch }}>
      {children}
    </GoogleMapContext.Provider>
  );
};
export default GoogleMapMarkerContextProvider;
