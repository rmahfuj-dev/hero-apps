import React from "react";
import { motion } from "framer-motion";
import Logo from "./assets/images/logo.png";

const PageLoader = ({ small }) => {
  return (
    <div
      className={`${
        small
          ? "w-full h-full flex justify-center items-center"
          : "fixed inset-0 flex justify-center items-center z-50 bg-white"
      }`}
    >
      <motion.img
        src={Logo}
        alt="Logo"
        className={small ? "w-12" : "w-16 md:w-24"}
        animate={{
          rotate: [0, 360],
          scale: [0.7, 1.5, 1],
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 1.5, ease: "linear" },
          scale: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
        }}
      />
    </div>
  );
};

export default PageLoader;
