import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const InstalledAppCard = ({
  id,
  image,
  title,
  downloads,
  ratingAvg,
  size,
  onUninstall,
}) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl w-full flex justify-between items-center">
      <div className="left flex items-center gap-3">
        <img
          src={image}
          alt={title}
          className="w-[60px] h-auto object-contain"
        />
        <div className="info">
          <h2 className="text-base font-bold mb-1">{title}</h2>
          <div className="details flex gap-2 sm:gap-4 text-sm text-[12px] sm:text-base">
            <p className="text-green-600 flex items-center gap-1">
              <MdOutlineFileDownload />
              {downloads / 10000000}M
            </p>
            <p className="flex items-center gap-1 text-violet-600">
              <FaStar />
              {ratingAvg}
            </p>
            <p className="text-gray-500">{size}MB</p>
          </div>
        </div>
      </div>
      <div className="right">
        <button
          className="bg-[#00BF83] text-white py-2 px-4 rounded-md shadow-[1px_1px_5px_#00BF83]"
          onClick={() => onUninstall(id)}
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
