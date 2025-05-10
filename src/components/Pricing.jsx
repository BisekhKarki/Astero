import React from "react";
import Heading from "./Heading";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="mt-[12rem] mb-20 max-sm:mt-[3rem]">
      <div className="flex justify-center items-center ">
        <Heading
          paragraph={"Pricing"}
          className={
            "text-[#A1ADFF] px-7 py-2 border-none bg-[#17171a] rounded-md priceCardAnimation"
          }
        />
      </div>
      <div className="mt-2 priceCardAnimation">
        <h1 className="text-white text-6xl text-center mt-10  font-serif max-sm:text-4xl max-md:text-5xl ">
          Direct, upfront pricing
        </h1>
        <p className="text-gray-400 text-center mt-5 max-sm:text-[12px] max-md:text-[15px]">
          Choose the plan that fits your needs—no hidden fees, cancel anytime.
        </p>
      </div>
      <PricingCard />
    </div>
  );
};

export default Pricing;
