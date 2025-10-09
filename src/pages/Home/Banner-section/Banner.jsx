import React from "react";
import BannerText from "./BannerText";
import BannerImg from "./BannerImg";
import Container from "../../../layouts/Container";

const Banner = () => {
  return (
    <section className="banner">
      <Container className="pt-[80px]">
        <div className="banner-wrapper flex flex-col gap-10 overflow-hidden">
          <BannerText />
          <BannerImg />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
