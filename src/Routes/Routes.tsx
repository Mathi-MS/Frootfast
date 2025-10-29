import { createHashRouter } from "react-router-dom";
import { PublicOnlyRoute } from "./ProtectedRoutes";
import TermsAndConditions from "../user/TermsAndConditions";
import Layout from "../user/Layout";
import RegisterForm from "../user/RegisterForm";
import Products from "../user/Products";
import OrderHistory from "../user/OrderHistory";

const routes = createHashRouter([
  {
    path: "/",
    element: <PublicOnlyRoute element={<Layout />} />,
    children: [
      {
        path: "/",
        element: <RegisterForm />,
      },
      {
        path: "/terms-and-conditions",
        element: <PublicOnlyRoute element={<TermsAndConditions />} />,
      },
      {
        path: "/products",
        element: <PublicOnlyRoute element={<Products />} />,
      },
      {
        path: "/order-history",
        element: <PublicOnlyRoute element={<OrderHistory />} />,
      },
    ],
  },
]);

export default routes;
