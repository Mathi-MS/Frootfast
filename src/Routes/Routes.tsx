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
import Review from "../user/Review";
import Contact from "../user/Contact";
import WebsiteLayout from "../website/WebsiteLayout";
import WebHome from "../website/home/WebHome";
import WebAbout from "../website/about/WebAbout";
import WebContact from "../website/contact/WebContact";
import WebSub from "../website/plan/WebSub";

const routes = createHashRouter([
  {
    path: "/",
    element: <PublicOnlyRoute element={<WebsiteLayout />} />,
    children: [
      {
        path: "/",
        element: <WebHome />,
      },
      {
        path: "/about",
        element: <WebAbout />,
      },
      {
        path: "/contact",
        element: <WebContact />,
      },
      {
        path: "/plans",
        element: <WebSub />,
      },
    ],
  },
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
  // {
  //   path: "/",
  //   element: <PublicOnlyRoute element={<Layout />} />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <RegisterForm />,
  //     },
  //     {
  //       path: "/terms-and-conditions",
  //       element: <PublicOnlyRoute element={<TermsAndConditions />} />,
  //     },
  //     {
  //       path: "/products",
  //       element: <PublicOnlyRoute element={<Products />} />,
  //     },
  //     {
  //       path: "/ordered",
  //       element: <PublicOnlyRoute element={<OrderedForm />} />,
  //     },
  //     {
  //       path: "/order-history",
  //       element: <PublicOnlyRoute element={<OrderHistory />} />,
  //     },
  //     {
  //       path: "/order-succesfully",
  //       element: <PublicOnlyRoute element={<OrderedSuccessfully />} />,
  //     },
  //     {
  //       path: "/review",
  //       element: <PublicOnlyRoute element={<Review />} />,
  //     },
  //     {
  //       path: "/contact",
  //       element: <PublicOnlyRoute element={<Contact />} />,
  //     },
  //   ],
  // },
]);

export default routes;
