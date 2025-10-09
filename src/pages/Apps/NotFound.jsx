import React from "react";

const NotFound = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[50px] pt-6">
      <h1 className="text-6xl font-bold text-gray-500 text-center">
        No Apps Found
      </h1>
      <button
        onClick={handleReload}
        className="bg-[#332A51] text-white py-2 font-bold px-4 rounded-md"
      >
        Show All Apps
      </button>
    </div>
  );
};

export default NotFound;
