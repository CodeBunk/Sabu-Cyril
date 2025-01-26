import React from "react";
import image from "@/assets/bg.png";
import image1 from "@/assets/images/services/cineImage.png";

import gallery1 from "@/assets/images/services/CINEMA/1.png";
import gallery2 from "@/assets/images/services/CINEMA/2.jpg";
import gallery3 from "@/assets/images/services/CINEMA/3.png";
import gallery4 from "@/assets/images/services/CINEMA/4.png";
import gallery5 from "@/assets/images/services/CINEMA/5.png";
import gallery6 from "@/assets/images/services/CINEMA/6.jpg";
import gallery7 from "@/assets/images/services/CINEMA/7.jpg";
import gallery8 from "@/assets/images/services/CINEMA/8.png";

import PageTemplate from "@/components/PageTemplate";

const CinePreviz = () => {
  const ImagesList = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 },
    { id: 6, image: gallery6 },
    { id: 7, image: gallery7 },
    { id: 8, image: gallery8 },
  ];
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      />
      <PageTemplate
        title="Cinema Previz"
        description={[
          "At TRINITY-XR, we specialize in Cinema Previsualization (Previz) services that help filmmakers visualize and plan their projects before shooting begins. Our expert team creates detailed 3D animations and storyboards that enable directors, producers, and cinematographers to explore camera angles, lighting, and scene compositions in a virtual environment.",
          "By utilizing advanced techniques and tools, we provide a clear representation of your vision, allowing for efficient decision-making and creative collaboration. Our previz services streamline the production process, reduce costs, and minimize risks by identifying potential challenges early on.",
          "Partner with TRINITY-XR to bring your cinematic vision to life and ensure a successful production through our comprehensive previz services.",
        ]}
        imageList={ImagesList}
        HeroImage={image1}
      />
    </div>
  );
};

export default CinePreviz;
