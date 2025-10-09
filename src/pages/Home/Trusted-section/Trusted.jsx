import React from "react";
import Container from "../../../layouts/Container";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Trusted = () => {
  return (
    <section className="trusted bg-[linear-gradient(to_bottom_right,_#632EE3_0%,_#9F62F2_100%)] ">
      <Container className="py-[80px]">
        <h2 className="text-white text-5xl font-bold text-center mb-10 ">
          Trusted By Millions, Built For You
        </h2>
        <div className="data-wrapper text-white flex flex-col gap-8 md:flex-row justify-center items-center text-center flex-wrap">
          <div className="download flex flex-col items-center gap-4 border p-4 rounded-xl hover:scale-[1.05] transition-all duration-300  min-w-[250px]">
            <p>Total Downloads</p>
            <span className="text-5xl">
              <FaDownload />
            </span>
            <h3 className="text-6xl font-extrabold flex items-center gap-6 justify-center">
              29.6M{" "}
            </h3>
            <p>20% More Than Last Month</p>
          </div>
          <div className="download flex flex-col items-center gap-4 border p-4 rounded-xl hover:scale-[1.05] transition-all duration-300  min-w-[250px]">
            <p>Total Reviews</p>
            <span className="text-5xl">
              <FaStar />
            </span>
            <h3 className="text-6xl font-extrabold flex items-center gap-6">
              906K
            </h3>
            <p>46% more than last month</p>
          </div>
          <div className="download flex flex-col items-center gap-4 border p-4 rounded-xl hover:scale-[1.05] transition-all duration-300 min-w-[250px]">
            <p>Active Apps</p>
            <span className="text-5xl">
              <FaGooglePlay />
            </span>
            <h3 className="text-6xl font-extrabold flex gap-6 items-center">
              132+
            </h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
