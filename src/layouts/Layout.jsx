import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageLoader from "../PageLoader";
const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // simulate load
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-[#f5f5f5] flex flex-col min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" />
        ) : (
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-h-screen"
          >
            <Outlet />
          </motion.main>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
