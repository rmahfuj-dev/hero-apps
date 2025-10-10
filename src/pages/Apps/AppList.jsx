import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppsContext";
import AppCard from "../../components/common/AppCard";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import NotFound from "./NotFound";
import PageLoader from "../../PageLoader";

const AppList = () => {
  const { apps } = useContext(AppContext);
  const [key, setKey] = useState("");
  const [displayedApps, setDisplayedApps] = useState(apps || []);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setKey(e.target.value);
  const handleClear = () => setKey("");
  const handleSubmit = (e) => e.preventDefault();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered =
        key.trim() === ""
          ? apps
          : apps.filter((app) =>
              app.title.toLowerCase().includes(key.trim().toLowerCase())
            );
      setDisplayedApps(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [key, apps]);

  return (
    <div>
      <div className="utility-wrapper mb-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h3 className="text-xl font-extrabold bg-white px-4 py-2 rounded-md">
          ({displayedApps.length}) Apps Found
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search apps..."
              className="border border-gray-300 rounded-md pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={key}
              onChange={handleChange}
            />
            {key && (
              <RxCross2
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-700"
                onClick={handleClear}
                size={20}
              />
            )}
          </div>
        </form>
      </div>

      <div className="min-h-[200px] flex justify-center items-center">
        {loading ? (
          <PageLoader small />
        ) : displayedApps.length === 0 ? (
          <NotFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
            {displayedApps.map((app) => (
              <AppCard key={app.id} {...app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppList;
