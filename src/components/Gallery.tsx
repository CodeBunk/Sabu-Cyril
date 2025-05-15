import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/assets/images/gallery/image1.jpg";
import image2 from "@/assets/images/gallery/iamge2.jpg";
import image3 from "@/assets/images/gallery/image3.jpeg";
import image4 from "@/assets/images/gallery/iamge4.png";
// import image5 from "@/assets/images/gallery/image5.jpg";
import image6 from "@/assets/images/gallery/iamge6.jpg";

const images = [image1, image2, image3, image4, image6];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImage = (index: number) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const navigate = (direction: number) => {
        const newIndex = (currentIndex + direction + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <div id="gallery" className="max-w-7xl mx-auto py-20 px-4">
            <h2 className="text-4xl sm:text-5xl font-semibold font-gilroy text-white text-center mb-16">
                Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery ${index}`}
                        className="w-full rounded-xl object-cover aspect-[3/2] hover:scale-[1.02] hover:opacity-80 transition-all duration-300 cursor-pointer"
                        onClick={() => openImage(index)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
                    onClick={closeImage}
                >
                    <div
                        className="relative max-w-full max-h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 bg-black text-white rounded-full p-3 md:p-2 hover:bg-primary transition"
                            onClick={closeImage}
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        {/* Left Nav */}
                        <button
                            className="absolute left-4 bg-black text-white rounded-full p-3 md:p-2 hover:bg-primary transition"
                            onClick={() => navigate(-1)}
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
                        />

                        {/* Right Nav */}
                        <button
                            className="absolute right-4 bg-black text-white rounded-full p-3 md:p-2 hover:bg-primary transition"
                            onClick={() => navigate(1)}
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
