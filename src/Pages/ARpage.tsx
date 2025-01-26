import React from "react";
import image from "@/assets/bg.png";
import image1 from "@/assets/images/services/ARIAMGE.png";

import gallery1 from "@/assets/images/services/ARImages/1.jpg";
import gallery2 from "@/assets/images/services/ARImages/2.png";
import gallery3 from "@/assets/images/services/ARImages/3.jpg";
import gallery4 from "@/assets/images/services/ARImages/4.png";
import gallery5 from "@/assets/images/services/ARImages/5.png";
import gallery6 from "@/assets/images/services/ARImages/6.png";
import gallery7 from "@/assets/images/services/ARImages/7.png";
import gallery8 from "@/assets/images/services/ARImages/8.webp";
import gallery9 from "@/assets/images/services/ARImages/9.jpg";

import PageTemplate from "@/components/PageTemplate";

const ARpage = () => {
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
  ];
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      />
      <PageTemplate
        title="Augmented Reality Solutions"
        description={[
          "At TRINITY-XR, we provide advanced Augmented Reality (AR) services that empower businesses across various industries. Our team crafts immersive AR experiences to enhance product visualization, training simulations, and interactive marketing campaigns.",
          "We develop AR applications for retail, allowing customers to visualize products in their space, and for manufacturing, providing real-time guidance for assembly and maintenance. Our services also include gamified learning for education, enriching student interactions with 3D models.",
          "Partner with TRINITY-XR to leverage the transformative power of AR, enhance customer engagement, and achieve measurable results.",
        ]}
        imageList={ImagesList}
        HeroImage={image1}
      />
    </div>
  );
};

export default ARpage;
