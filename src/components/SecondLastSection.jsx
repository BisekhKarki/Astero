import React from "react";
import call from "../assets/svg/phone.svg";
import Buttons from "./Buttons";

const SecondLastSection = () => {
  return (
    <div className="text-white mt-32 mb-20 priceCardAnimation">
      <div>
        <h1 className="text-white text-6xl text-center mt-10  font-serif max-sm:text-4xl max-md:text-5xl ">
          Ready to Supercharge <br /> Your Workflows?
        </h1>
      </div>
      <div className="flex justify-center items-center mb-7 mt-10">
        <div className="flex gap-3 ">
          <Buttons
            className={
              "text-white bg-[#5024FF] py-2.5 w-[13rem] max-md:w-[20rem] max-sm:w-[14rem] max-sm:py-2  border-none text-md flex items-center justify-center gap-2 "
            }
            text={"Start for free"}
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
    </div>
  );
};

export default SecondLastSection;
