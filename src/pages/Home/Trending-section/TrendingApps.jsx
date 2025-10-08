import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppsContext";
import TrendingApp from "../../../components/common/AppCard";
import { Link } from "react-router-dom";

const TrendingApps = () => {
  const { apps } = useContext(AppContext);
  const randomApps = [...apps].sort(() => Math.random() - 0.5).slice(0, 8);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
        {randomApps.map((app) => (
        <TrendingApp key={app.id} {...app} />
      ))}
    </div>
  );
};

export default TrendingApps;
