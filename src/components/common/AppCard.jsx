import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const AppCard = ({ id, image, title, downloads, ratingAvg }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-full max-w-[348px] h-[435px] items-center rounded-xl p-4 bg-white gap-4 justify-between hover:translate-y-[-8px] duration-300 transition-all"
      onClick={() => {
        navigate(`/apps/${id}`);
      }}
    >
      <div className="image-wrapper w-full h-[316px]">
        <img
          className="w-full h-full object-contain object-center rounded-[10px]"
          src={image}
          alt={title}
        />
      </div>
      <p className="text-xl font-medium">{title}</p>
      <div className="info flex justify-between w-full">
        <p className="text-green-600 font-medium flex items-center gap-2 bg-green-50 px-3 py-1 rounded-sm">
          <span>
            <LuDownload />
          </span>
          {downloads / 1000000}M
        </p>
        <p className="font-medium text-[#FF8811] flex items-center gap-2 bg-yellow-100 py-1 px-3 rounded-sm">
          <span>
            <FaStar />
          </span>
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
