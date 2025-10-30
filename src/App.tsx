import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import CustomToast from "./Custom/CustomToast";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <CustomToast />
    </>
  );
}

export default App;
