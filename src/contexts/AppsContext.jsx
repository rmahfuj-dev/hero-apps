import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch("/appdata.json");
      const data = await res.json();
      setApps(data);
    };
    fetchData()
  }, []);

  return (
    <AppContext.Provider value={{apps}}>
      {children}
    </AppContext.Provider>
  );
};
