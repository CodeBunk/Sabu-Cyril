import React from "react";
import Time from "@/assets/images/why/Time.png";
import Team from "@/assets/images/why/Team.png";
import QA from "@/assets/images/why/QA.png";
const Why = () => {
  const Data = [
    { name: "Dedicated Team of 80+ 3D Artists", image: Team },
    { name: "In-house Quality Assurance Tool", image: QA },
    { name: "24x7 Available Person of Contact", image: Time },
  ];
  return (
    <div
      id="#whyus"
      className=" text-center md:h-screen flex  flex-col  py-20  px-10 "
    >
      <div className=" font-menseal font-bold pb-10 ">
        WHY CHOOSE TRINITY -XR{" "}
      </div>
      <div className=" font-poppins font-regular md:text-2xl text-xl pb-10 text-[#A7A7A8] ">
        With our expertise in all things 3D, we deliver 3D modeling services
        that get you digital-ready.
      </div>
      <div className=" grid md:grid-cols-3    pb-10  gap-10 ">
        {" "}
        {Data?.map((data: any) => (
          <div className=" flex flex-col justify-between rounded-2xl bg-[#111419] px-6 pt-6  ">
            <div className=" pt-10 font-poppins text-lg">{data?.name}</div>

            <img src={data?.image} alt="" className=" w-full " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
