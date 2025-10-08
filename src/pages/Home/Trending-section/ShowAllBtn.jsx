import React from "react";
import { Link } from "react-router-dom";

const ShowAllBtn = () => {
  return (
    <Link to="apps" className="bg-[linear-gradient(to_bottom_right,_#632EE3_0%,_#9F62F2_100%)] mx-auto block  text-center max-w-[300px] py-2 mt-10 text-white  rounded-sm">
      <button>Show All</button>
    </Link>
  );
};

export default ShowAllBtn;
