import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import CustomToast from "./Custom/CustomToast";
import SelectOutletPopup from "./user/SelectOutletPopup";
import { OutletProvider } from "./user/OutletContext";

function App() {
  return (
    <>
      <OutletProvider>
        <RouterProvider router={routes} />
        <CustomToast />
        <SelectOutletPopup />
      </OutletProvider>
    </>
  );
}

export default App;
