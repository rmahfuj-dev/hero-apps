import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppsContext";
import Container from "../../layouts/Container";
import InstalledAppCard from "./InstalledAppCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InstalledHeading from "./InstalledHeading";

const Installation = () => {
  const { apps } = useContext(AppContext);
  const [installedAppsDetails, setInstalledAppsDetails] = useState([]);
  const [sortOrder, setSortOrder] = useState("default"); 

  useEffect(() => {
    const installedIds =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    let installedDetails = apps.filter((app) =>
      installedIds.includes(app.id)
    );

    if (sortOrder === "low-high") {
      installedDetails.sort((a, b) => a.size - b.size);
    } else if (sortOrder === "high-low") {
      installedDetails.sort((a, b) => b.size - a.size);
    }

    setInstalledAppsDetails(installedDetails);
  }, [apps, sortOrder]);

  const handleUninstall = (id) => {
    const installedIds =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedIds = installedIds.filter((appId) => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));

    const updatedDetails = installedAppsDetails.filter((app) => app.id !== id);
    setInstalledAppsDetails(updatedDetails);

    toast.success("App uninstalled successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  if (!apps || apps.length === 0) {
    return <div className="text-center mt-10 text-xl">Loading apps...</div>;
  }

  return (
    <Container className="py-[20px]">
      <div className="p-6">
        <InstalledHeading />
        <div className="flex justify-between items-center pb-7 mb-5 border-b-[3px] border-gray-300 flex-col gap-4 sm:flex-row sm:gap-0">
          <p className="text-xl font-medium  px-4 py-1 rounded-md bg-white">
            {installedAppsDetails.length} Apps Found
          </p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select"
          >
            <option value="default" disabled>
              Sort By Size
            </option>
            <option value="low-high">Low-High</option>
            <option value="high-low">High-Low</option>
          </select>
        </div>
        {installedAppsDetails.length === 0 ? (
          <p className="text-xl text-gray-500">No apps installed yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {installedAppsDetails.map((app) => (
              <InstalledAppCard
                key={app.id}
                {...app}
                onUninstall={handleUninstall}
              />
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Installation;
