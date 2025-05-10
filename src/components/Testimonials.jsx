import React from "react";
import Heading from "./Heading";
import TestimonialCarousal from "./TestimonialCarousal";

const Testimonials = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-center items-center ">
        <Heading
          paragraph={"Pricing"}
          className={
            "text-[#A1ADFF] px-7 py-2 border-none bg-[#17171a] rounded-md"
          }
        />
      </div>
      <div className="mt-2">
        <h1 className="text-white text-6xl text-center mt-10  font-serif max-sm:text-4xl max-md:text-5xl ">
          What Our Customers Are Saying
        </h1>
        <p className="text-gray-400 text-center mt-5 max-sm:text-[12px] max-md:text-[15px]">
          See why top companies rely on Astero to automate their business that
          <br />
          fuels growth and elevates user experiences.
        </p>
      </div>
      <TestimonialCarousal />
    </div>
  );
};

export default Testimonials;
