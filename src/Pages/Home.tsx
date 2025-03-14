/** @format */

import React from "react";
import Hero from "@/components/Hero";

import About from "@/components/About";

import Contact from "@/components/Contact";

import ServiceCarousel from "@/components/services";
import Featured from "@/components/Featured-Projects";
import Commercial from "@/components/Featured- Commercials";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <div className=" relative bg-black ">

      <div className="text-4xl max-md:pt-32   z-10 text-white  ">
        <Hero />

        <ServiceCarousel />
        <About />

        <Featured />
        <Commercial />
        <Contact />
        <Gallery />

      </div>
    </div>
  );
};

export default Home;
