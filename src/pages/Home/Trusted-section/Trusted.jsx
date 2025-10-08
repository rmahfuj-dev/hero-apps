import React from "react";
import Container from "../../../layouts/Container";

const Trusted = () => {
  return (
    <section className="trusted bg-[linear-gradient(to_bottom_right,_#632EE3_0%,_#9F62F2_100%)] ">
      <Container className="p-[80px]">
        <h2 className="text-white text-5xl font-bold text-center mb-10">
          Trusted By Millions, Built For You
        </h2>
        <div className="data-wrapper text-white flex flex-col gap-8 md:flex-row justify-around items-center text-center">
          <div className="download flex flex-col items-center gap-4 ">
            <p>Total Downloads</p>
            <h3 className="text-6xl font-extrabold">29.6M</h3>
            <p>20% More Than Last Month</p>
          </div>
          <div className="download flex flex-col items-center gap-4 ">
            <p>Total Downloads</p>
            <h3 className="text-6xl font-extrabold">29.6M</h3>
            <p>20% More Than Last Month</p>
          </div>
          <div className="download flex flex-col items-center gap-4 ">
            <p>Total Downloads</p>
            <h3 className="text-6xl font-extrabold">29.6M</h3>
            <p>20% More Than Last Month</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
