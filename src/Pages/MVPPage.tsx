import React from "react";
import image from "@/assets/bg.png";
import image1 from "@/assets/images/services/MVPImage.png";

import gallery1 from "@/assets/images/services/MVPImages/1.png";
import gallery2 from "@/assets/images/services/MVPImages/2.png";

import PageTemplate from "@/components/PageTemplate";

const MVPpage = () => {
  const ImagesList = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
  ];
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      />
      <PageTemplate
        title="MVP Building"
        description={[
          "At TRINITY-XR, we specialize in MVP (Minimum Viable Product) building services that help startups and businesses bring their ideas to life quickly and efficiently. Our expert team works closely with you to define core functionalities and create a streamlined version of your product that addresses your target audience's needs.",
          "We employ agile development methodologies and cutting-edge technologies to design and develop your MVP, allowing for rapid iteration based on user feedback. This approach minimizes risk and accelerates the path to market, enabling you to validate your concept and attract investors or stakeholders.",
          "Partner with TRINITY-XR to build a robust MVP that sets the foundation for your product's success and positions you for future growth.",
        ]}
        imageList={ImagesList}
        HeroImage={image1}
      />
    </div>
  );
};

export default MVPpage;
