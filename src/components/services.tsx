import React, { useState, useEffect } from "react";
import Custom from "@/assets/images/services/Custom-property.png";
import Miniatures from "@/assets/images/services/Miniatures.png";
import SpecialProp from "@/assets/images/services/special-Prop.png";
import Prosthetics from "@/assets/images/services/prosthetics.png";
import animaetronics from "@/assets/images/services/animaetronics.jpg";
import SetDesign from "@/assets/images/services/set.png";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AR, CINE, MODEL, MR, VR, MVP } from "@/Constants";
import { useNavigate } from "react-router-dom";
const services = [
  {
    id: 1,
    image: Prosthetics,
    title: "Prosthetics",
    description:
      "Our expert team creates highly realistic prosthetics that bring characters to life. From subtle aging effects to complete character transformations, we craft custom prosthetics that enhance storytelling while ensuring comfort and natural movement for performers.",
    cta: "Discover how our prosthetics can transform your characters.",
    // route: MODEL,
  },
  {
    id: 2,
    title: "Special Properties",
    description:
      "We design and fabricate unique, story-driven props that add authenticity to your production. From hero weapons and magical artifacts to period-accurate tools, each piece is meticulously crafted to support your narrative and withstand the demands of filming.",
    cta: "Explore our custom prop creation services.",
    image: SpecialProp,
    // route: VR,
  },
  {
    id: 3,
    title: "Set Design",
    description:
      "Transform your vision into reality with our comprehensive set design and construction services. We create immersive environments ranging from historical period recreations to futuristic worlds, with meticulous attention to detail and authenticity.",
    cta: "Let us bring your cinematic worlds to life.",
    image: SetDesign,
    // route: AR,
  },
  {
    id: 4,
    title: "Miniatures",
    description:
      "Our skilled artisans craft highly detailed miniatures that create stunning cinematic effects. From architectural models to elaborate landscapes, we build precise scaled replicas that seamlessly integrate with full-scale filming and visual effects.",
    cta: "See how our miniatures can enhance your production value.",
    image: Miniatures,
    // route: MR,
  },
  {
    id: 5,
    image: Custom,
    title: "Custom-Made Art Pieces",
    description:
      "We create exclusive art installations and decorative elements that elevate your visual narrative. Our team designs and produces unique pieces that enhance set aesthetics while supporting your story's themes and cultural context.",
    cta: "Discover how our custom art can enhance your production design.",
    // route: CINE,
  },
  {
    id: 6,
    image: animaetronics,
    title: "Animatronics",
    description:
      "Our cutting-edge animatronic creations bring impossible characters to life. We design, build, and operate sophisticated mechanical figures that integrate seamlessly with live-action sequences, providing realistic movement and interaction on set.",
    cta: "Learn how our animatronics can add magic to your production.",
    // route: MVP,
  },
];

const ServiceCarousel = () => {
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
        transform: `scale(0.9) translateX(${direction === 1 ? "-20%" : "-20%"
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
    <div id="#expertise" className="   py-20  ">
      <div className="relative h-auto space-y-0  ">
        <div className="md:text-left text-center px-6   md:text-5xl text-3xl md:pl-40 font-bold   pb-2 ">
          Team Expertise
        </div>
        <div className="flex md:flex-row flex-col md:h-[60vh] h-full items-center justify-between md:gap-8">
          {/* Cards Container */}
          <div className="relative md:w-3/4 w-full  h-full  flex items-center justify-center overflow-visible  max-md:px-20 ">
            <div className="relative w-full pt-5 min-h-[300px] h-full  flex items-center justify-center gap-0  ">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="absolute w-3/4 h-5/6 aspect-[5/6] transition-all duration-500 ease-in-out"
                  style={getSlideStyle(index)}
                >
                  <a className=" cursor-pointer">
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
            <div className=" md:hidden absolute top-0 left-0 w-full h-full  flex items-center  justify-between">
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

                  className=" text-xl font-poppins    font-medium bg-primary text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-colors duration-300"
                >
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className=" md:flex items-center justify-center gap-10 w-full mt-10 hidden">
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-gray"
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
    </div >
  );
};

export default ServiceCarousel;
