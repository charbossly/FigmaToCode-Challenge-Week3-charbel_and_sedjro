import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";
import Index from "./routes/index.jsx";
import About from "./routes/about";
import Contact from "./routes/contact";
import Career from "./routes/careers";
import WeAReHiring from "./routes/wearehiring";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Team from "./routes/team";
import ErrorPage from "./routes/NotFound";
import Pricing from "./routes/pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/carrers",
        element: <Career />,
      },
      {
        path: "/wearehiring",
        element: <WeAReHiring />,
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
