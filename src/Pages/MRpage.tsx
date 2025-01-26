import React from "react";
import image from "@/assets/bg.png";
import image1 from "@/assets/images/services/MRIAMGE.png";
import bike from "@/assets/images/services/MRImages/bike.png";

import gallery1 from "@/assets/images/services/MRImages/1.jpg";
import gallery2 from "@/assets/images/services/MRImages/2.jpg";
import gallery3 from "@/assets/images/services/MRImages/3.jpg";
// import gallery4 from "@/assets/images/services/MRImages/4.jpg";
import gallery5 from "@/assets/images/services/MRImages/5.jpg";
import gallery6 from "@/assets/images/services/MRImages/6.png";
import gallery7 from "@/assets/images/services/MRImages/7.jpg";
import gallery8 from "@/assets/images/services/MRImages/8.webp";
import gallery9 from "@/assets/images/services/MRImages/9.jpg";
import gallery10 from "@/assets/images/services/MRImages/10.jpg";
import gallery11 from "@/assets/images/services/MRImages/11.jpg";
import gallery12 from "@/assets/images/services/MRImages/12.jpg";
import gallery13 from "@/assets/images/services/MRImages/Shot1.png";
import gallery14 from "@/assets/images/services/MRImages/Shot2.png";

import PageTemplate from "@/components/PageTemplate";

const MRpage = () => {
  const ImagesList = [
    // { id: 1, image: gallery1 },
    // { id: 2, image: gallery2 },
    // { id: 3, image: gallery3 },
    { id: 4, image: gallery13 },
    { id: 4, image: gallery14 },
    { id: 5, image: gallery5 },
    { id: 6, image: gallery6 },
    { id: 7, image: gallery7 },
    { id: 9, image: gallery9 },
    { id: 10, image: gallery10 },
    { id: 8, image: gallery8 },
    { id: 11, image: gallery11 },
    { id: 12, image: gallery12 },
    // { id: 13, image: gallery13 },
  ];
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      />
      <PageTemplate
        title="Mixed Reality Solutions"
        description={[
          "At TRINITY-XR, we specialize in delivering cutting-edge Mixed Reality (MR) services that enhance business operations across various sectors. Our expert team creates immersive MR experiences that blend the physical and digital worlds, enabling innovative applications in training, collaboration, and product design.",
          "Our MR solutions empower organizations with tools like interactive 3D modeling for product development, virtual collaboration spaces for remote teams, and training simulations that adapt to real-world environments. By integrating MR with existing systems, we help businesses improve productivity and engagement..",
          "Partner with TRINITY-XR to harness the power of Mixed Reality, transform how you work, and drive tangible business outcomes.",
        ]}
        // imageList={ImagesList}
        HeroImage={image1}
      />
      <PageTemplate
        title="Mixed Reality Solutions For "
        newTitle="Automobile"
        inverse={true}
        description={[
          "Our innovative MR tech (MR) solutions tailored for the automobile industry, focusing on custom modifications and creations. Our MR technology enables designers and engineers to visualize and interact with 3D models of custom automobile parts and modifications in a real-world context. They can view the final results without actually building the product saving cost and time",
          "Partner with us for this immersive experience which allows precise adjustments, real-time collaboration, and enhanced creativity, ensuring that every custom modification meets the highest standards of quality and performance. .",
        ]}
        imageList={ImagesList}
        // link="https://youtu.be/qFpRyGgiKEY?feature=shared"
        HeroImage={bike}
      />
    </div>
  );
};

export default MRpage;
