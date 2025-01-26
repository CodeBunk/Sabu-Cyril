import {
  ArrowBigLeft,
  ArrowLeftCircle,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  MoveRight,
  MoveRightIcon,
} from "lucide-react";
import React, { useState } from "react";

interface PageTemplateProps {
  title: string;
  newTitle?: any;
  description: string[];
  imageList?: { id: number; image: string }[];
  HeroImage: string;
  link?: string;
  inverse?: boolean;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  newTitle,
  description,
  imageList,
  link,
  HeroImage,
  inverse,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const prevImage = () => {
    if (imageList && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? imageList.length - 1 : prevIndex! - 1
      );
    }
  };

  const nextImage = () => {
    if (imageList && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex! + 1
      );
    }
  };

  return (
    <div className="text-4xl max-w-7xl mx-auto max-md:pt-24 pt-20 z-10 text-white">
      <div
        className={`md:p-10 p-6 flex w-full ${
          !inverse
            ? "md:flex-row flex-col-reverse"
            : "md:flex-row-reverse flex-col-reverse"
        } gap-10 md:py-20 items-start`}
      >
        <div className="flex-grow w-full md:w-1/2">
          <div className="text-lg font-poppins font-semibold md:text-4xl pb-7">
            <span className="  font-poppins font-semibold text-white">
              {title}
            </span>
            <span className="  font-poppins font-bold text-primary">
              {newTitle}
            </span>
          </div>

          <div className="font-poppins md:text-lg text-base flex flex-col gap-5 text-justify">
            {description.map((desc, index) => (
              <div key={index} className="font-poppins">
                {desc}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          {link ? (
            <a href={link} target="_blank" className=" cursor-pointer">
              <img
                src={HeroImage}
                alt=""
                className="w-full object-cover max-h-[80vh]"
              />
            </a>
          ) : (
            <img
              src={HeroImage}
              alt=""
              className="w-full object-cover max-h-[80vh]"
            />
          )}
        </div>
      </div>

      {imageList ? (
        <div className="bg-gradient-to-r  from-transparent via-primary to-transparent">
          <div className="   flex items-center overflow-y-scroll gap-2 py-4  ">
            <div
              style={
                { "--child-count": imageList.length } as React.CSSProperties
              }
              className=" flex animate-marquee-clients  gap-3 "
            >
              {imageList.map((data, index) => (
                <div key={data.id} className="flex-none">
                  <img
                    src={data.image}
                    alt=""
                    className="md:h-56 h-40 object-contain w-auto cursor-pointer"
                    onClick={() => openModal(index)} // open modal on click
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {isModalOpen && currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80  w-screen flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={imageList![currentImageIndex].image}
              alt=""
              className="h-[60vh]  md:px-20   w-[80vw] object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform select-none -translate-y-1/2 text-white text-3xl font-bold px-4"
            >
              <ArrowLeftCircleIcon />
              {/* <ArrowBigLeft /> */}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold px-4"
            >
              <ArrowRightCircleIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageTemplate;
