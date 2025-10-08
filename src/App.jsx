import React from "react";
import Layout from "./layouts/Layout";
import { AppProvider } from "./contexts/AppsContext";

const App = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
};

export default App;
