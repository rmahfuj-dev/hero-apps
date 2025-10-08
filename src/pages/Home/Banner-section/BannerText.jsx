import React from "react";
import appstore from "../../../assets/images/app-store.png";
import playstore from "../../../assets/images/play-store.png";

const BannerText = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <h1 className="text-7xl font-bold leading-[84px]">
        We Build <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382] text-[20px] leading-[32px]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br className="hidden 2xl:block" /> Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="buttons flex gap-4 mt-6 flex-col md:flex-row">
        <button className="px-6 py-3 bg-white flex rounded-md gap-2 justify-center items-center">
          <span>
            <img className="w-8 h-8" src={appstore} alt="" />
          </span>
          Google Play
        </button>
        <button className="px-6 py-3 bg-white flex rounded-md gap-2 justify-center items-center hover:bg-gray-400 hover:text-white hover:scale-[1.05] transition-all duration-200">
          <span>
            <img className="w-8 h-8" src={playstore} alt="" />
          </span>
          Play Store
        </button>
      </div>
    </div>
  );
};

export default BannerText;
