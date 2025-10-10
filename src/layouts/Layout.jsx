import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLoader from "../PageLoader";
import { useLoader } from "../contexts/LoaderContext";

const Layout = () => {
  const location = useLocation();
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // reduced from 1000ms
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700); // reduced from 1200ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="page-loader" />}
      </AnimatePresence>

      <Header />
      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
