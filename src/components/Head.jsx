import React from "react";
import Heading from "./Heading";
import call from "../assets/svg/phone.svg";
import Buttons from "./Buttons";
import mainCard from "../assets/maincard.avif";
import "../css/Head.css";

const Head = () => {
  return (
    <div className=" w-full firstHeadAnimation ">
      <div className="flex justify-center items-center mt-12 py-10">
        <div className="bg-black border border-gray-700  text-white flex justify-center items-center gap-2  px-1 py-[0.3rem] rounded-md">
          <Heading
            paragraph={"New"}
            className={
              "border-none py-0.5  px-2 bg-gray-800  rounded-sm text-[0.9rem]  "
            }
          />
          <Heading
            paragraph={"Astero intelligence version II"}
            className={"text-[#A1ADFF] text-sm mr-4 max-sm:text-[0.8rem] "}
          />
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-center">
          <Heading
            heading={"Scale Your Business Without Limits"}
            className={
              "max-md:text-6xl text-white text-center mt-8 w-[45rem]  text-7xl max-sm:text-5xl font-serif firstHeadAnimation "
            }
          />
        </div>
        <p className="text-center mt-3 text-gray-500 max-md:text-sm max-sm:text-base">
          Astero's intuitive flow builder empowers you to design,{" "}
          <br className="max-sm:block hidden" /> launch,{" "}
          <br className="max-sm:hidden" /> and scale automated processes—no
          coding <br className="max-sm:block hidden" /> required.
        </p>
      </div>
      <div className="flex justify-center items-center mb-7">
        <div className="flex gap-3 ">
          <Buttons
            className={
              "text-white bg-[#5024FF] py-2.5 w-[13rem] max-md:w-[20rem] max-sm:w-[14rem] max-sm:py-2  border-none text-md flex items-center justify-center gap-2 "
            }
            text={"Get this template"}
          />
          <Buttons
            className={
              "text-gray-200 bg-[#393946]/20 border max-md:w-[20rem] max-sm:w-[14rem] max-sm:py-2  border-gray-600 px-5  py-2.5 w-[13rem] text-md flex items-center justify-center gap-2 "
            }
            text={"Talk to sales"}
            icon={call}
          />
        </div>
      </div>
      <Heading
        paragraph={"No credit card required."}
        className={"text-gray-400 text-center mb-10 text-[1.1rem]"}
      />
      <div className=" px-24 mb-10 max-lg:px-12  max-md:hidden">
        <div className="border-4 border-gray-100 rounded-md border-pulse ">
          <div>
            <img src={mainCard} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
