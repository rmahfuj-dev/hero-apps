import React from "react";
import Container from "../../layouts/Container";
import Banner from "./Banner-section/Banner";
import Trusted from "./Trusted-section/Trusted";
import Trending from "./Trending-section/Trending";

const Home = () => {
  return (
    <div>
      <Banner />
      <Trusted />
      <Trending />
    </div>
  );
};

export default Home;
