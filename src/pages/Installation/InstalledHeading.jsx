import React from "react";
import { SlSocialDropbox } from "react-icons/sl";

const InstalledHeading = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold text-[#392F5A] flex justify-center gap-2 items-center">
        Your Installed Apps{" "}
        <span className="text-6xl text-blue-600">
          <SlSocialDropbox />
        </span>
      </h1>
      <p className="text-[18px] text-center text-gray-400 mt-2 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
    </div>
  );
};

export default InstalledHeading;
