import React from "react";
import image from "@/assets/bg.png";
import image1 from "@/assets/images/services/vrIndustries.png";
import image2 from "@/assets/images/services/vrrealestete.png";
import image3 from "@/assets/images/services/vrhealthcare.png";

import gallery1 from "@/assets/images/services/vr/1.png";
import gallery2 from "@/assets/images/services/vr/2.png";
import gallery3 from "@/assets/images/services/vr/3.png";
import gallery4 from "@/assets/images/services/vr/4.png";
// import gallery5 from "@/assets/images/services/vr/5.png";
import gallery6 from "@/assets/images/services/vr/6.jpg";
import gallery7 from "@/assets/images/services/vr/7.png";
import gallery8 from "@/assets/images/services/vr/8.png";
import gallery9 from "@/assets/images/services/vr/9.png";
import gallery10 from "@/assets/images/services/vr/10.png";
import gallery11 from "@/assets/images/services/vr/11.png";
import gallery12 from "@/assets/images/services/vr/12.png";
import gallery13 from "@/assets/images/services/vr/13.png";
import gallery14 from "@/assets/images/services/vr/14.png";
import gallery15 from "@/assets/images/services/vr/15.png";
import gallery16 from "@/assets/images/services/vr/16.png";
import gallery17 from "@/assets/images/services/vr/medical.webp";
import gallery18 from "@/assets/images/services/vr/virtual.jpg";
import PageTemplate from "@/components/PageTemplate";

const VRpage = () => {
  const ImagesList1 = [
    { id: 14, image: gallery14 },
    { id: 2, image: gallery2 },
    { id: 15, image: gallery15 },
    { id: 8, image: gallery8 },
    { id: 16, image: gallery16 },
    { id: 3, image: gallery3 },
  ];
  const ImagesList2 = [
    { id: 13, image: gallery13 },
    { id: 10, image: gallery10 },
    { id: 1, image: gallery1 },
    { id: 9, image: gallery9 },
    { id: 11, image: gallery11 },
    { id: 12, image: gallery12 },
    { id: 4, image: gallery4 },
  ];
  const ImagesList3 = [
    { id: 1, image: gallery6 },
    { id: 3, image: gallery17 },
    { id: 4, image: gallery18 },
    { id: 2, image: gallery7 },
  ];
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className=" fixed top-0 left-0 h-screen w-full -z-10  "
      />
      <PageTemplate
        title="Virtual Reality Solutions For "
        newTitle="Industries"
        description={[
          "At TRINITY-XR, we specialize in advanced B2B Virtual Reality (VR) solutions for businesses globally. Our team designs immersive virtual environments for various sectors, including industry, training, and education. By harnessing cutting-edge technology, we help organizations create engaging visual experiences that enhance human interaction. Our experts excel in deploying VR applications across diverse business verticals, ensuring seamless integration and impactful results.",
          "Partner with us to elevate your business through innovative VR solutions that drive growth and engagement.",
        ]}
        imageList={ImagesList1}
        link="https://youtu.be/qFpRyGgiKEY?feature=shared"
        HeroImage={image1}
      />
      <PageTemplate
        title="Virtual Reality Solutions For "
        newTitle="Real-Estate"
        description={[
          "At TRINITY-XR, we offer transformative Virtual Reality (VR) solutions for the real estate industry, revolutionizing property showcasing and client engagement. Our immersive VR environments enable potential buyers to explore properties in detail from anywhere, creating a realistic and interactive experience that enhances decision-making and shortens the sales cycle. With advanced VR technology, we empower real estate professionals to provide virtual tours, customized layouts, and immersive walkthroughs that save time and resources while increasing buyer confidence. Partner with us to elevate your real estate business through innovative VR solutions that drive engagement, efficiency, and sales.",
        ]}
        inverse={true}
        imageList={ImagesList2}
        HeroImage={gallery4}
      />
      <PageTemplate
        title="Virtual Reality Solutions For "
        newTitle="Healthcare"
        description={[
          "At TRINITY-XR, we provide advanced Virtual Reality (VR) solutions tailored to the healthcare industry, enhancing training, patient engagement, and therapeutic practices. Our team designs immersive, interactive environments that allow medical professionals to refine their skills, simulate complex procedures, and improve patient outcomes with precision. By integrating cutting-edge VR technology, we empower healthcare providers to deliver realistic training simulations and engaging patient experiences that support effective treatment and rehabilitation.  Partner with us to redefine healthcare through innovative VR solutions that drive precision, care quality, and meaningful patient interactions.",
        ]}
        imageList={ImagesList3}
        HeroImage={image3}
      />
    </div>
  );
};

export default VRpage;
