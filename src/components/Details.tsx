import React from "react";
import image from "@/assets/BigLogo.png";
import IMAGE from "@/assets/images/Map.png";
const Details = () => {
  return (
    <div
      id="#about"
      className="grid md:grid-cols-2 font-poppins pt-20 px-10 items-center py-20 md:h-screen gap-10"
    >
      <div className=" md:hidden  max-md:text-center block  font-poppins font-bold  tracking-wide  ">
        Find Us Here !
      </div>
      <div className="  w-full   ">
        <div className="  aspect-video rounded-xl">
          <a
            href="https://maps.app.goo.gl/LkMQDo2ASdomVLoN7"
            target="_blank"
          >
            <img src={IMAGE} alt="" />
          </a>
        </div>
      </div>
      <div className=" w-full max-md:pt-10   ">
        <div className=" flex flex-col justify-center gap-10  py-5 h-full  aspect-video rounded-xl ">
          <div className=" max-md:text-center md:block hidden  font-poppins font-bold  tracking-wide  ">
            Find Us Here !
          </div>
          <div className=" flex flex-grow flex-col  gap-4  ">
            <div className=" font-poppins md:text-xl text-lg leading-relaxed flex items-center gap-2 ">
              <div className=" bg-gradient-to-b flex-none h-10 w-10 rounded-full flex items-center justify-center from-[#0A0C10] to-[#4A5876]">
                <svg
                  width="28"
                  height="34"
                  viewBox="0 0 28 34"
                  className=" h-7  flex-none "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0251 33.7349C13.075 33.7638 13.1143 33.7861 13.142 33.8018L13.1882 33.8275C13.5564 34.0297 14.0133 34.0281 14.3819 33.8282L14.4292 33.8018C14.457 33.7861 14.4962 33.7638 14.5461 33.7349C14.646 33.6771 14.7886 33.5927 14.9679 33.4823C15.3264 33.2616 15.8325 32.936 16.437 32.509C17.6441 31.6563 19.2546 30.3912 20.8686 28.7386C24.081 25.4496 27.4177 20.5079 27.4177 14.1526C27.4177 6.62379 21.3144 0.520508 13.7856 0.520508C6.25685 0.520508 0.153564 6.62379 0.153564 14.1526C0.153564 20.5079 3.49024 25.4496 6.70267 28.7386C8.3167 30.3912 9.9272 31.6563 11.1342 32.509C11.7388 32.936 12.2449 33.2616 12.6034 33.4823C12.7827 33.5927 12.9253 33.6771 13.0251 33.7349ZM13.7856 19.1097C16.5234 19.1097 18.7427 16.8903 18.7427 14.1526C18.7427 11.4148 16.5234 9.19546 13.7856 9.19546C11.0479 9.19546 8.82852 11.4148 8.82852 14.1526C8.82852 16.8903 11.0479 19.1097 13.7856 19.1097Z"
                    fill="#8A4CEF"
                  />
                </svg>
              </div>
              <div className=" font-poppins font-medium ">
                902, RDB Harmony, Serilingampalle, Hyderabad, 500019
              </div>
            </div>
            <div className=" font-poppins md:text-xl text-lg leading-relaxed flex items-center gap-2 ">
              <div className=" bg-gradient-to-b h-10 w-10 rounded-full flex items-center justify-center from-[#0A0C10] to-[#4A5876]">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  className=" h-6  w-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.327148 7.07622V18.8919C0.327148 21.1734 2.17663 23.0229 4.45808 23.0229H25.1127C27.3942 23.0229 29.2437 21.1734 29.2437 18.8919V7.07622L16.9504 14.6413C15.6227 15.4583 13.9481 15.4583 12.6204 14.6413L0.327148 7.07622Z"
                    fill="#8A4CEF"
                  />
                  <path
                    d="M29.2437 4.65099V4.43366C29.2437 2.15221 27.3942 0.302734 25.1127 0.302734H4.45808C2.17663 0.302734 0.327148 2.15221 0.327148 4.43366V4.65099L13.7029 12.8822C14.3668 13.2907 15.2041 13.2907 15.8679 12.8822L29.2437 4.65099Z"
                    fill="#8A4CEF"
                  />
                </svg>
              </div>
              <a
                href="mailto:info@trinityxr.in"
                className=" font-poppins font-medium "
              >
                info@trinityxr.in
              </a>
            </div>
            <div className=" font-poppins md:text-xl text-lg leading-relaxed flex items-center gap-2 ">
              <div className=" bg-gradient-to-b h-10 w-10 rounded-full flex items-center justify-center from-[#0A0C10] to-[#4A5876]">
                <svg
                  width="39"
                  height="18"
                  viewBox="0 0 39 18"
                  className=" h-7  w-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.5396 9.50518C39.192 11.1576 39.192 13.8366 37.5396 15.489L36.1717 16.8569C35.3136 17.7149 33.9817 17.8789 32.9412 17.2546L27.4271 13.9462C26.5148 13.3987 26.0193 12.3578 26.1698 11.3045L26.4923 9.04682C26.5258 8.81238 26.4078 8.63612 26.2674 8.57102C22.0436 6.61204 17.1329 6.61204 12.909 8.57102C12.7686 8.63612 12.6506 8.81238 12.6841 9.04682L13.0067 11.3045C13.1571 12.3578 12.6617 13.3987 11.7493 13.9462L6.23529 17.2546C5.19475 17.8789 3.86283 17.7149 3.00478 16.8569L1.63686 15.489C-0.0155207 13.8366 -0.0155207 11.1576 1.63686 9.50518L3.88078 7.26125C12.5558 -1.41373 26.6207 -1.41373 35.2957 7.26125L37.5396 9.50518Z"
                    fill="#8A4CEF"
                  />
                </svg>
              </div>
              <a
                href="tel:+919948348899"
                className=" font-poppins font-medium "
              >
                +(91) 99483 48899
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
