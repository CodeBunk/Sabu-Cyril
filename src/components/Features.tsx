import React, { useState, useEffect } from "react";
import VRIMAGE from "@/assets/images/services/Vr.png";
import ARIMAGE from "@/assets/images/services/AR.png";
import MRIMAGE from "@/assets/images/services/MR.png";
import Modeling from "@/assets/images/services/Loop.gif";
import MVPIMAGE from "@/assets/images/services/MVP.png";
import CINEMA from "@/assets/images/services/Cinemapng.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AR, CINE, MODEL, MR, VR, MVP } from "@/Constants";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    image: Modeling,
    title: "3d modelling & texturing",
    description:
      "Transform your ideas into reality with TRINITY-XR's 3D modeling and texturing services! We create detailed 3D models and game-ready assets for product design, architectural visualization, and virtual reality. Our expert team delivers stunning visuals with lifelike materials, ideal for gaming, film, and marketing projects. ",

    cta: "Discover how our 3D services can elevate your work today!",
    route: MODEL,
  },
  {
    id: 2,
    title: "VR SERVICES",
    description:
      "Trinity XR provides tailored Virtual Reality (VR) solutions for healthcare, education, manufacturing, real estate, and gaming. Our immersive applications enhance training, engagement, and visualization.",
    cta: "Discover how our customized VR services can transform your business.",
    image: VRIMAGE,
    route: VR,
  },
  {
    id: 3,
    title: "AR SOLUTIONS",
    description:
      "Transform your business with TRINITY-XR's innovative Augmented Reality (AR) services!",

    cta: "We create immersive experiences for product visualization, training simulations, and interactive marketing. Our solutions help retailers visualize products in their environment and assist manufacturers with real-time guidance. Discover how AR can elevate your business today!",
    image: ARIMAGE,
    route: AR,
  },
  {
    id: 4,
    title: "MR services",
    description:
      "Elevate your business with TRINITY-XR's innovative Mixed Reality (MR) services! We create immersive experiences that blend the physical and digital worlds for applications in training, collaboration, and product design.",

    cta: "Our solutions enable interactive 3D modeling, virtual collaboration for remote teams, and adaptive training simulations. Discover how MR can transform your operations today!",

    image: MRIMAGE,
    route: MR,
  },

  {
    id: 5,
    image: CINEMA,
    title: "cinema Previz",
    description:
      "Enhance your filmmaking process with TRINITY-XR;s Cinema Previsualization (Previz) services! We create detailed 3D animations and storyboards that allow filmmakers to visualize camera angles, lighting, and scene compositions before shooting. Our expert team helps streamline production, reduce costs, and identify challenges early.",

    cta: "Discover how our previz services can elevate your project today!",
    route: CINE,
  },
  {
    id: 6,
    image: MVPIMAGE,
    title: "MVP product building",
    description:
      "Launch your idea with TRINITY-XR's MVP(Minimum Viable Product) development services! Our expert team helps you define core features and develop a streamlined version of your product that meets user needs. We use agile methodologies for rapid iteration and feedback, minimizing risk and speeding up your time to market. ",

    cta: "Discover how our MVP services can pave the way for your product's success today!",
    route: MVP,
  },
];

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAnimating, setIsAnimating] = useState(false);

  const Locaiton = useNavigate();
  const getPreviousIndex = () =>
    (currentIndex - 1 + services.length) % services.length;
  const getNextIndex = () => (currentIndex + 1) % services.length;

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide(getNextIndex());
  };

  const prevSlide = () => {
    goToSlide(getPreviousIndex());
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  const getSlideStyle = (index: number) => {
    if (index === currentIndex) {
      return {
        transform: "scale(1) translateX(0)",
        opacity: 1,
        zIndex: 20,
      };
    } else if (index === currentIndex - 1) {
      return {
        transform: `scale(0.9) translateX(${
          direction === 1 ? "-20%" : "-20%"
        })`,
        opacity: 0.5,
        zIndex: 10,
      };
    } else if (index === currentIndex + 1) {
      return {
        transform: `scale(0.9) translateX(${direction === 1 ? "20%" : "20%"})`,
        opacity: 0.5,
        zIndex: 10,
      };
    }
    return {
      transform: "scale(0.9) translateX(120%)",
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <div id="#services" className="   py-20  ">
      <div className="relative h-auto space-y-0  ">
        <div className="md:text-left text-center px-6   md:text-5xl text-3xl md:pl-32 font-bold uppercase tracking-wider pb-2 ">
        Featured Projects
        </div>
        <div className="flex md:flex-row flex-col md:h-[60vh] h-full items-center justify-between md:gap-8">
          

          {/* Content Section */}
          <div className="md:w-1/2 w-full h-full  max-md:px-10 pb-10  flex items-center justify-center  ">
            <div
              className="transform max-md:min-h-[300px] transition-all duration-500 flex flex-col gap-2  ease-in-out"
              style={{
                transform: isAnimating ? `translateY(20px)` : "null",
              }}
            >
              <div className=" mb-3 mx-auto md:hidden block">
                <a
                  href={services[currentIndex].route}
                  className=" text-xl font-poppins w-auto   font-medium bg-primary text-white px-4 py-1 rounded-xl hover:bg-purple-700 transition-colors duration-300"
                >
                  know more
                </a>
              </div>

              <p className="text-gray-300  font-poppins md:text-xl sm:text-lg text-sm mb-4">
                {services[currentIndex].description}
              </p>
              <p className="text-gray-400  md:text-xl sm:text-lg text-sm font-poppins  ">
                {services[currentIndex].cta}
              </p>
              <div className=" md:block hidden pt-3 ">
                <a
                  href={services[currentIndex].route}
                  className=" text-xl font-poppins    font-medium bg-primary text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-colors duration-300"
                >
                  know more
                </a>
              </div>
            </div>
          </div>
          {/* Cards Container */}
          <div className="relative md:w-1/2 w-full   h-full  flex items-center justify-center overflow-visible  max-md:px-20 ">
            <div className="relative w-3/4 pt-5 min-h-[300px] h-full  flex items-center justify-center gap-0  ">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="absolute h-5/6 aspect-[5/6] transition-all duration-500 ease-in-out"
                  style={getSlideStyle(index)}
                >
                  <a href={service?.route} className=" cursor-pointer">
                    <div className="w-full h-full rounded-3xl overflow-hidden border-white border-opacity-50 border ">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br  opacity-60`}
                      />

                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover    "
                      />

                      <div className=" uppercase rounded-b-3xl  text-xl  flex items-end pb-3 justify-center font-menseal font-bold  absolute bottom-0 h-20 text-balance  left-0 -0 w-full text-center bg-gradient-to-t from-black  to-transparent ">
                        {" "}
                        <h2 className="md:text-2xl text-lg font-bold text-white max-sm:leading-[106%] w-3/4 break-words">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className=" md:hidden absolute top-0 right-0 w-full h-full  flex items-center  justify-between">
              <button
                onClick={prevSlide}
                className=" p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                disabled={isAnimating}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
                disabled={isAnimating}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className=" md:flex md:flex-end items-center justify-end gap-10 md:w-full mt-10 hidden bg">
        <div className=" md:flex md:flex-end items-center justify-center gap-10 md:w-1/2">
          {/* <div className="">  */}

          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-primary text-white hover:bg-gray-700 transition-colors duration-300"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-600 w-8" : "bg-secondary"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-primary text-white hover:bg-gray-700 transition-colors duration-300"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
