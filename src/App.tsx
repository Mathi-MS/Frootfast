import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import CustomToast from "./Custom/CustomToast";
import SelectOutletPopup from "./user/SelectOutletPopup";
import { OutletProvider } from "./user/OutletContext";
import WhatsappBottom from "./user/WhatsappBottom";
import MobileBottom from "./user/MobileBottom";

function App() {
  return (
    <>
      <OutletProvider>
        <RouterProvider router={routes} />
        <CustomToast />
        <SelectOutletPopup />
        <WhatsappBottom />
        <MobileBottom />
      </OutletProvider>
    </>
  );
}

export default App;
