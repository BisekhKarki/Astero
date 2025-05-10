import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/svg/brand.svg";
import { navLinks } from "../constant";
import Buttons from "./Buttons";
import call from "../assets/svg/phone.svg";
import cart from "../assets/svg/cart.svg";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navRef = useRef(null);

  //   When the size changes
  useEffect(() => {
    const handleChange = () => {
      if (window.innerWidth > 1023) {
        setShowMobileNav(false);
      }
    };

    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  //   When cliking outside the box
  useEffect(() => {
    const handleChange = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowMobileNav(false);
      }
    };

    document.addEventListener("mousedown", handleChange);

    return () => {
      document.removeEventListener("mousedown", handleChange);
    };
  }, []);

  return (
    <div className="bg-[#17171a] border-b border-gray-700   fixed top-0  w-full">
      <div className="flex justify-between items-center px-5 py-3 max-lg:hidden">
        <div className="flex justify-between items-center gap-15">
          <img src={logo} alt="logo" className="w-[6.5rem] h-[1.5rem]" />
          <ul className="flex gap-4 text-md">
            {navLinks.map((item) => (
              <li className="text-gray-400 cursor-pointer" key={item.index}>
                <a href={`#${item.name}`}> {item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <Buttons
            className={
              "text-gray-200 bg-[#393946]/20 border border-gray-600  py-2 w-[10rem] text-sm flex items-center justify-center gap-2 "
            }
            text={"Talk to sales"}
            icon={call}
          />
          <Buttons
            className={
              "text-white bg-[#5024FF] py-2 w-[10rem] border-none text-sm flex items-center justify-center gap-2 "
            }
            text={"Get this template"}
            icon={cart}
          />
        </div>
      </div>

      <div className="max-lg:block hidden">
        <div ref={navRef}>
          <div className="px-5 py-3 flex justify-between ">
            <img src={logo} alt="logo" className="w-[6.5rem] h-[1.5rem]" />
            <div>
              {showMobileNav ? (
                <RxCross1
                  className="text-white text-2xl"
                  onClick={() => setShowMobileNav(!showMobileNav)}
                />
              ) : (
                <FaBars
                  className="text-white text-2xl"
                  onClick={() => setShowMobileNav(!showMobileNav)}
                />
              )}
            </div>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden transform  ${
              showMobileNav
                ? " -translate-y-1 opacity-100  min-h-[200px] z-10"
                : " translate-y-0 opacity-0 min-h-0 z-0"
            }`}
          >
            {showMobileNav ? (
              <div>
                <ul className={`text-md text-center space-y-4`}>
                  {navLinks.map((item) => (
                    <li
                      className="text-gray-400 cursor-pointer"
                      key={item.index}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-3 w-full px-10 mt-5 mb-5`}>
                  <Buttons
                    className={
                      "text-gray-200 bg-[#393946]/20 border border-gray-600  py-4 w-[50rem] text-sm flex items-center justify-center gap-2 "
                    }
                    text={"Talk to sales"}
                    icon={call}
                  />
                  <Buttons
                    className={
                      "text-white bg-[#5024FF]  w-[50rem] border-none py-4 text-sm flex items-center justify-center gap-2 "
                    }
                    text={"Get this template"}
                    icon={cart}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
