import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const Features = () => {
  return (
    <div className="mb-10 mt-44" id="Features">
      <div className="flex justify-center items-center">
        <Heading
          paragraph={"Features"}
          className={
            "text-gray-300 px-7 py-2 border-none bg-[#17171a] rounded-md "
          }
        />
      </div>
      <h1 className="text-white text-8xl text-center mt-10  font-serif max-sm:text-7xl featureHeadAnimation ">
        Simplify Your <br /> Workflows
      </h1>
      <p className="text-gray-600 text-center mt-5 max-sm:text-sm">
        From pre-built blueprints to advanced logic and analytics, Astero{" "}
        <br className=" max-lg:hidden max-md:block" />
        empowers you to automate{" "}
        <br className="max-lg:block hidden max-md:hidden" /> every step.
      </p>
      <Card />
    </div>
  );
};

export default Features;
