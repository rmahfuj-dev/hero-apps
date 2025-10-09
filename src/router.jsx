import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Apps from "./pages/Apps/Apps";
import AppDetails from "./components/AppDetails";
import Installation from "./pages/Installation/Installation";
import Error from "./pages/not-found/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "apps/:id", element: <AppDetails /> },
      {path:"installation",element:<Installation />},
      {path:"*",element:<Error />}
    ],
  },
]);

export default router;
