import React, { useContext } from "react";
import { AppContext } from "../contexts/AppsContext";
import { useParams } from "react-router-dom";
import Container from "../layouts/Container";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const AppDetails = () => {
  const { apps } = useContext(AppContext);
  const { id } = useParams();

  if (!apps || apps.length === 0) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  const item = apps.find((app) => app.id === Number(id));

  if (!item) {
    return <div className="text-center mt-10 text-xl">App not found 😔</div>;
  }

  return (
    <Container>
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
          <div className="statistic-data flex">
            <div
              className="downloads flex justify-center items-center gap-2 p-4 border-r border-dashed border-blue-300
            "
            >
              <MdOutlineFileDownload className="text-7xl font-extrabold text-violet-600" />
              <div className="info">
                <p className="text-sm text-gray-400">Downloads</p>
                <p className="text-4xl font-extrabold">
                  {item.downloads / 1000000}M
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2  p-4 border-r border-dashed border-blue-300">
              <FaStar className="text-7xl font-extrabold text-violet-600" />
              <div className="info">
                <p className="text-sm text-gray-400">Avarage Ratings</p>
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
          <div className="button   w-full">
            <button className="shine-button bg-[#00D390] text-white text-2xl font-extrabold px-5 py-4 rounded-md mb-7">
              Download Now ({item.size}MB)
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={item.ratings}
            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            barCategoryGap="30%"
          >
            <XAxis
              type="number"
              tick={{ fontSize: 18 }}
              domain={[0, 12000]}
              ticks={[0, 3000, 6000, 9000, 12000]}
            />
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
              isAnimationActive={true}
              animationBegin={100}
              animationDuration={600}
              animationEasing="ease-in-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default AppDetails;
