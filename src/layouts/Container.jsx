import React from "react";
import { Outlet } from "react-router-dom";

const Container = ({ children,className }) => {
  return (
    <div className={`container w-[95%] mx-auto max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
