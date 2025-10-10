import React from "react";
import Layout from "./layouts/Layout";
import { AppProvider } from "./contexts/AppsContext";
import { LoaderProvider } from "./contexts/LoaderContext";

const App = () => {
  return (
    <AppProvider>
      <LoaderProvider>
        <Layout />
      </LoaderProvider>
    </AppProvider>
  );
};

export default App;
