import { createHashRouter } from "react-router-dom";
import { PublicOnlyRoute } from "./ProtectedRoutes";
import TermsAndConditions from "../user/TermsAndConditions";
import Layout from "../user/Layout";
import RegisterForm from "../user/RegisterForm";
import Products from "../user/Products";
import OrderHistory from "../user/OrderHistory";
import OrderedForm from "../user/OrderedForm";
import OrderedSuccessfully from "../user/OrderedSuccesfully";
import Login from "../admin/Login";
import AdminLayout from "../admin/AdminLayout";
import Prebook from "../admin/Prebook";

const routes = createHashRouter([
  {
    path: "/ad/login",
    element: <PublicOnlyRoute element={<Login />} />,
  },
  {
    path: "/admin",
    element: <PublicOnlyRoute element={<AdminLayout/>} />,
    children: [
      {
        path: "/admin",
        element: <Prebook />,
      },
    ]
  },
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
        path: "/ordered",
        element: <PublicOnlyRoute element={<OrderedForm />} />,
      },
      {
        path: "/order-history",
        element: <PublicOnlyRoute element={<OrderHistory />} />,
      },
      {
        path: "/order-succesfully",
        element: <PublicOnlyRoute element={<OrderedSuccessfully />} />,
      },
    ],
  },
]);

export default routes;
