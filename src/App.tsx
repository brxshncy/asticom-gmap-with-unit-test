import { MainLayout } from "./components/Layout/MainLayout";
import "antd/dist/antd.css";
import { GoogleMap } from "components/GoogleMap/GoogleMap";
import { GoogleMapMarkerContextProvider } from "components/context/GoogleMapMarkerContextProvider";

const App: React.FC = () => {
  return (
    <GoogleMapMarkerContextProvider>
      <MainLayout>
        <GoogleMap />
      </MainLayout>
    </GoogleMapMarkerContextProvider>
  );
};

export default App;
