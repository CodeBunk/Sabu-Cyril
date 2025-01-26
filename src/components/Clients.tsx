import React from "react";
import image1 from "@/assets/images/clients/Heritage.png";
import image2 from "@/assets/images/clients/DSR.png";
import image3 from "@/assets/images/clients/ThrillCity.png";
import image4 from "@/assets/images/clients/sreekari.png";
import image5 from "@/assets/images/clients/Indira.png";
import image6 from "@/assets/images/clients/chillapalli_veawers.png";
import image7 from "@/assets/images/clients/lanchan.png";
import image8 from "@/assets/images/clients/Cimor.png";
import image9 from "@/assets/images/clients/BrilliantBudz.png";
import image10 from "@/assets/images/clients/Mandavas.png";

const Clients = () => {
  const Data = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image8 },
    { image: image9 },
    { image: image10 },
  ];

  return (
    <div
      id="#clients"
      className="text-left py-20 px-10 lg:h-screen flex flex-col justify-center  items"
    >
      <div className="font-menseal font-bold pb-10 relative">
        Clientele
        <div className=" absolute  bottom-6 w-40 h-1 bg-gradient-to-r from-transparent to-transparent via-primary "></div>
      </div>
      <div className="font-poppins md:text-2xl text-xl pb-10 text-[#A7A7A8]">
        We've worked with visionary clients across industries, delivering
        innovative, immersive experiences. Here are some of our valued
        partnerships.
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-full overflow-hidden whitespace-nowrap">
        <div className="flex space-x-10 h-[30vh] animate-marquee">
          {Data.map((data, index) => (
            <div
              key={index}
              className="flex justify-center max-h-[200px]  aspect-square p-4"
            >
              <img
                src={data.image}
                alt={`Client logo ${index + 1}`}
                className="w-full aspect-square h-full object-contain rounded-lg"
              />
            </div>
          ))}
          {Data.map((data, index) => (
            <div
              key={index}
              className="flex justify-center max-h-[200px]  aspect-square p-4"
            >
              <img
                src={data.image}
                alt={`Client logo ${index + 1}`}
                className="w-full aspect-square h-full object-contain rounded-lg"
              />
            </div>
          ))}
          {Data.map((data, index) => (
            <div
              key={index}
              className="flex justify-center max-h-[200px]  aspect-square p-4"
            >
              <img
                src={data.image}
                alt={`Client logo ${index + 1}`}
                className="w-full aspect-square h-full object-contain rounded-lg"
              />
            </div>
          ))}
          {Data.map((data, index) => (
            <div
              key={index}
              className="flex justify-center max-h-[200px]  aspect-square p-4"
            >
              <img
                src={data.image}
                alt={`Client logo ${index + 1}`}
                className="w-full aspect-square h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* Duplicate the logos for seamless looping */}
        <div className="flex space-x-10 animate-marquee">
          {Data.map((data, index) => (
            <div
              key={index + Data.length}
              className="flex justify-center max-w-[200px] h- aspect-square p-4"
            >
              <img
                src={data.image}
                alt={`Client logo ${index + 1}`}
                className="w-full aspect-square h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
