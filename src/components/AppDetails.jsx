import React, { useContext } from "react";
import { AppContext } from "../contexts/AppsContext";
import { useParams } from "react-router-dom";
import Container from "../layouts/Container";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const AppDetails = () => {
  const { apps } = useContext(AppContext);
  const { id } = useParams();

  // If apps are not loaded yet
  if (!apps || apps.length === 0) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  // Find the app by id
  const item = apps.find((app) => app.id === Number(id));

  // If no app matches the id
  if (!item) {
    return <div className="text-center mt-10 text-xl">App not found 😔</div>;
  }

  return (
    <Container>
      <div className="p-6 flex items-center lg:gap-[100px] flex-col gap-4 lg:flex-row ">
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
            <div className="downloads flex justify-center items-center gap-2 p-4 border-r border-dashed border-blue-300">
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
                <p className="text-4xl font-extrabold">
                  {item.ratingAvg}
                </p>
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
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
