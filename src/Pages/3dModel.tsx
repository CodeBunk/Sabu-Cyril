import React from "react";
import image from "@/assets/bg.png";
import image1 from "@/assets/images/services/3dImage.png";

import gallery1 from "@/assets/images/services/3DModelling/1.gif";
import gallery2 from "@/assets/images/services/3DModelling/2.gif";
import gallery3 from "@/assets/images/services/3DModelling/3.jpg";
import gallery4 from "@/assets/images/services/3DModelling/4.png";
import gallery5 from "@/assets/images/services/3DModelling/5.png";
import gallery6 from "@/assets/images/services/3DModelling/6.jpg";
import gallery7 from "@/assets/images/services/3DModelling/7.jpg";
import gallery8 from "@/assets/images/services/3DModelling/8.jpeg";
import gallery9 from "@/assets/images/services/3DModelling/9.jpeg";
import gallery10 from "@/assets/images/services/3DModelling/10.jpeg";

import PageTemplate from "@/components/PageTemplate";

const Modelling = () => {
  const ImagesList = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 },
    { id: 6, image: gallery6 },
    { id: 7, image: gallery7 },
    { id: 8, image: gallery8 },
    { id: 9, image: gallery9 },
    { id: 10, image: gallery10 },
  ];
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      />
      <PageTemplate
        title="3D Modelling & Texturing "
        description={[
          "At TRINITY-XR, we provide expert 3D modeling and texturing services that bring your visions to life with exceptional realism. Our skilled team specializes in creating detailed 3D models and game-ready assets for various applications, including product design, architectural visualization, and immersive virtual reality experiences.",
          "We utilize advanced techniques and industry-standard software to ensure that every model is visually stunning and optimized for performance. Our texturing services enhance models with lifelike materials and finishes, making them perfect for use in gaming, film, and marketing.",
          "Partner with TRINITY-XR to leverage the transformative power of AR, enhance customer engagement, and achieve measurable results.",
        ]}
        imageList={ImagesList}
        HeroImage={image1}
      />
    </div>
  );
};

export default Modelling;
