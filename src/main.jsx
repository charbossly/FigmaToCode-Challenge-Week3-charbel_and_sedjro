import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";
import Index from "./routes/index.jsx";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

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
