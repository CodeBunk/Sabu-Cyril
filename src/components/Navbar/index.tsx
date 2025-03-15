"use client";

import React, { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";

import logo from "../../assets/image.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const Location = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const NavItems = [
    { name: "Expertise", route: "/#expertise" },
    { name: "About Us", route: "/#about" },
    // { name: "Why Us", route: "/#whyus" },
    { name: "Featured", route: "/#featured" },
    { name: "Gallery", route: "/#gallery" },
    // { name: "Testimonials", route: "/#testimonials" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial hash

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (route: string) => {
    setIsOpen(false);
    window.location.href = route;
  };

  console.log(window.location, "A window.location");
  return (
    <div className="z-[1000] fixed top-0 w-full ">
      <div className="  ">
        <div className=" -[#E50914] bg-black border-primary border-b w-full via-slate-500 ">
          {/* <div className="flex justify-between items-center font-menseal p-4 tracking-wide text-xl rounded-2xl font-regular bg-black"> */}
          <div className="flex  justify-between items-center max-w-7xl   mx-auto font-menseal p-4 tracking-wide text-xl w-full rounded-2xl font-regular bg-black">
            <img
              onClick={() => Location("/#home")}
              loading="eager"
              className=" h-10  transition-all duration-500  hover:scale-105 cursor-pointer"
              src={logo}
              alt=""
            />

            <div className="hidden md:flex gap-10">
              {NavItems.map((item) => (
                <a
                  onClick={() => Location(item?.route)}
                  className={`${item?.route === "/" + window.location.hash
                    ? " text-primary   text-opacity-90 "
                    : ""
                    }"group cursor-pointer hover:-translate-y-0.5 delay-50 transition-all duration-200"`}
                >
                  {item.name}
                  {/* <div
                    className={`  ${
                      item?.route === "/" + window.location.hash
                        ? " bg-gradient-to-r from-transparent via-white to-transparent "
                        : ""
                    } "  h-0.5 transition-all   group-hover:delay-300  group-hover:transition-all  group-hover:duration-300  group-hover:bg-gradient-to-r from-transparent via-white to-transparent"`}
                  ></div> */}
                </a>
              ))}
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => Location("/#contact")}
                className=" bg-gradient-to-r  border-primary border px-3 py-2 rounded-xl  hover:-translate-y-0.5 transition-all duration-400  hover:scale-105 bg-primary to-secondary"
              >
                Contact us
              </button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-64 bg-black p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            {NavItems.map((item) => (
              <a
                key={item.name}
                // href={item.route}
                className="text-white hover:text-primary transition-colors duration-200"
                onClick={() => handleNavigation(item.route)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => handleNavigation("/#contact")}
              className="bg-gradient-to-r from-primary to-secondary hover:-translate-y-0.5 transition-all duration-400 hover:scale-105 py-2 px-3 rounded-xl"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
