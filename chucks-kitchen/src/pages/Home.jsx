import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";
import ChefSpecials from "../components/ChefSpecials";
import Discover from "../components/Discover";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <PopularCategories />
      <ChefSpecials />
      <Discover />
    </>
  );
};

export default Home;
