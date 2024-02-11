import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";
import Index from "./routes/index.jsx";
import About from "./routes/about";
import Contact from "./routes/contact.jsx";
import ProductPage from "./routes/ProductPage.jsx";
import PricingPage from "./routes/PricingPage.jsx";


import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Product from "./routes/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact /> ,
      },
      {
        path: "/pricing",
        element: <PricingPage /> ,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
     
    ],
  },
  // {
  //   path: "/500",
  //   element: <InternalError />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
