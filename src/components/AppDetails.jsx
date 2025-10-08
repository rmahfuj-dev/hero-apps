import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppsContext";
import { useParams } from "react-router-dom";
import Container from "../layouts/Container";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { apps } = useContext(AppContext);
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);

  const item = apps ? apps.find((app) => app.id === Number(id)) : null;

  useEffect(() => {
    if (!item) return;
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.includes(item.id)) {
      setClicked(true);
    }
  }, [item]);

  const handleInstall = () => {
    if (!item) return;

    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!installedApps.includes(item.id)) {
      installedApps.push(item.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setClicked(true);
      toast.success(`${item.title} installed successfully!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.info(`${item.title} is already installed!`, {
        position: "top-right",
        autoClose: 2000,
      });
      setClicked(true);
    }
  };

  if (!apps || apps.length === 0) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (!item) {
    return <div className="text-center mt-10 text-xl">App not found 😔</div>;
  }

  return (
    <Container className="py-[80px]">
      <div className="p-6 flex items-start lg:gap-[100px] flex-col gap-4 lg:flex-row border-gray-300 border-b-[3px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-64 h-64 object-contain"
        />
        <div className="details flex flex-col gap-4 w-full">
          <h1 className="text-3xl font-bold text-[#392F5A]">{item.title}</h1>
          <p className="text-xl border-b-violet-500 pb-4 border-b-[3px] w-full">
            Developed by{" "}
            <span className="text-violet-600">{item.companyName}</span>
          </p>
          <div className="statistic-data flex flex-col sm:flex-row">
            <div className="downloads flex justify-center items-center gap-2 p-4 border-r sm:border-dashed border-blue-300 border-none">
              <MdOutlineFileDownload className="text-7xl font-extrabold text-violet-600" />
              <div className="info">
                <p className="text-sm text-gray-400">Downloads</p>
                <p className="text-4xl font-extrabold">
                  {item.downloads / 1000000}M
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 p-4 border-r sm:border-dashed border-blue-300 border-none">
              <FaStar className="text-7xl font-extrabold text-violet-600" />
              <div className="info">
                <p className="text-sm text-gray-400">Average Ratings</p>
                <p className="text-4xl font-extrabold">{item.ratingAvg}</p>
              </div>
            </div>
            <div className="downloads flex justify-center items-center gap-2 p-4">
              <MdOutlineFileDownload className="text-7xl font-extrabold text-violet-600" />
              <div className="info">
                <p className="text-sm text-gray-400">Total Reviews</p>
                <p className="text-4xl font-extrabold">
                  {item.reviews / 1000}K
                </p>
              </div>
            </div>
          </div>
          <div className="button w-full flex justify-center sm:justify-start">
            <button
              className="shine-button bg-[#00D390] text-white text-2xl font-extrabold px-5 py-4 rounded-md mb-7"
              onClick={handleInstall}
            >
              {clicked ? "Installed" : `Install Now (${item.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-64 md:h-80 lg:h-96 mt-6 mb-6">
        <h2 className="text-4xl font-extrabold mb-4 text-[#392F5A]">Ratings</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={item.ratings}
            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            barCategoryGap="30%"
          >
            <XAxis type="number" tick={{ fontSize: 18 }} />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 18 }}
              reversed
            />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#00D390"
              barSize={18}
              radius={[0, 4, 4, 0]}
              isAnimationActive
              animationBegin={100}
              animationDuration={600}
              animationEasing="ease-in-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-4xl font-extrabold mt-[60px] text-[#392F5A] mb-4">
          Description
        </h2>
        <p className="text-xl text-gray-500">{item.description}</p>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default AppDetails;
