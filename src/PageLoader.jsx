import React from "react";
import { motion } from "framer-motion";
import Logo from "./assets/images/logo.png";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.img
        src={Logo}
        alt="Logo"
        className="w-16 md:w-24"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default PageLoader;
