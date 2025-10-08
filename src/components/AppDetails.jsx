import React, { useContext } from "react";
import { AppContext } from "../contexts/AppsContext";

const AppDetails = () => {
  const { app } = useContext(AppContext);
  console.log(app)
  return <div>AppDetails</div>;
};

export default AppDetails;
