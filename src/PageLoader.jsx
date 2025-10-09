import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./assets/images/logo.png";

const letters = ["L", "A", "D", "I", "N", "G"];

const PageLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        className="flex text-6xl md:text-8xl font-extrabold gap-2 items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>L</span>
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-16 md:w-24"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default PageLoader;
