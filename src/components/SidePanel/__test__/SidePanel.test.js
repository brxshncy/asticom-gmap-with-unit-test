import { render, screen } from "@testing-library/react";
import { useGmapContext } from "components/context/GoogleMapMarkerContextProvider";
import { SidePanel } from "../SidePanel";

it("should render list of sample json data given on the side panel", () => {
  const { selectedGmapState } = useGmapContext();
  render(<SidePanel />);
});
