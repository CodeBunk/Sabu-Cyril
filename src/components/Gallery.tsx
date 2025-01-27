import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/assets/images/gallery/image1.jpg";
import image2 from "@/assets/images/gallery/iamge2.jpg";
import image3 from "@/assets/images/gallery/image3.jpeg";
import image4 from "@/assets/images/gallery/iamge4.png";
import image5 from "@/assets/images/gallery/image5.jpg";
import image6 from "@/assets/images/gallery/iamge6.jpg";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null as any);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImage = (index: any) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const navigate = (direction: any) => {
        const newIndex = (currentIndex + direction + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <div id="#gallery" className=" max-w-7xl mx-auto py-20 pt-32 ">
            <div className="font-bold font-menseal text-white text-5xl pb-16  text-center font-bold  relative">
                Gallery
            </div>
            <div className="grid grid-cols-3 w-full gap-4 ">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery ${index}`}
                        className="w-full h- border hover:scale-[102%] transition-all duration-200 object-cover rounded-xl  aspect-video cursor-pointer hover:opacity-80"
                        onClick={() => openImage(index)}
                    />
                ))}
            </div>

            {/* {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={closeImage}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-4 text-white text-2xl"
                            onClick={() => navigate(-1)}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                        />

                        <button
                            className="absolute right-4 text-white text-2xl"
                            onClick={() => navigate(1)}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
}
