import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import CustomToast from "./Custom/CustomToast";
import SelectOutletPopup from "./user/SelectOutletPopup";
import { OutletProvider } from "./user/OutletContext";
import WhatsappBottom from "./user/WhatsappBottom";
import MobileBottom from "./user/MobileBottom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
