/** @format */

import React from "react";
// import image from "../assets/bg.png";
import Hero from "@/components/Hero";
import Service from "@/components/services";
import Why from "@/components/Why";
import About from "@/components/About";
import Clients from "@/components/Clients";

import Contact from "@/components/Contact";
import Details from "@/components/Details";

import ServiceCarousel from "@/components/services";
import FeatureCarousel from "@/components/Features";
import Featured from "@/components/Featured-Projects";
import Commercial from "@/components/Featured- Commercials";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <div className=" relative bg-black ">
      {/* <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      /> */}
      <div className="text-4xl max-md:pt-32   z-10 text-white  ">
        <Hero />

        <ServiceCarousel />
        <About />
        {/* <FeatureCarousel /> */}
        {/* <Why /> */}
        {/* <Clients /> */}
        <Featured />
        <Commercial />
        <Contact />
        <Gallery />
        {/* <Details /> */}
      </div>
    </div>
  );
};

export default Home;
