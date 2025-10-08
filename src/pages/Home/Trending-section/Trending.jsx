import React from "react";
import Container from "../../../layouts/Container";
import TrendingHeading from "./TrendingHeading";
import TrendingApps from "./TrendingApps";
import ShowAllBtn from "./ShowAllBtn";

const Trending = () => {
  return (
    <section className="trending">
      <Container className="py-[80px]">
        <TrendingHeading />
        <TrendingApps />
        <ShowAllBtn />
      </Container>
    </section>
  );
};

export default Trending;
