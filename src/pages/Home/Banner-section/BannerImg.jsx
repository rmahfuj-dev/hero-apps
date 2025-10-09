import React from "react";
import bannerimg from "../../../assets/images/hero.png";
const BannerImg = () => {
  return (
    <div>
      <img className="slide-from-left w-full max-w-100%  xl:max-w-[80%] 2xl:max-w-[75%] mx-auto" src={bannerimg} alt="" />
    </div>
  );
};

export default BannerImg;
