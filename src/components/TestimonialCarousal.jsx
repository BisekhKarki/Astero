import React from "react";
import { userReview } from "../constant";

const TestimonialCarousal = () => {
  return (
    <div className="mt-5 overflow-hidden relative">
      <div className="absolute top-0 inset-0 z-20 pointer-events-none text-white bg-[linear-gradient(to_right,black_10%,_transparent_20%,_transparent_80%,_black_90%)] "></div>
      <div className="">
        <div className="flex  gap-10 animateReview w-max overflow-hidden ">
          {userReview.map((user, index) => (
            <div
              key={`main-${index}`}
              className="bg-[#17171a] px-10 py-10 max-sm:py-6 w-[500px] max-sm:w-[300px] max-md:w-[400px] max-md:h-[450px]  max-sm:h-[400px] flex-shrink-0   space-y-5 rounded-2xl"
            >
              <img
                src={user.profileUrl}
                className="rounded-full max-sm:w-[50px]"
                alt={user.name}
                width={70}
                height={24}
              />
              <div>
                <p className="text-white font-sans text-xl max-sm:text-sm">
                  {user.name}
                </p>
                <span className="text-gray-400 text-sm">{user.job}</span>
              </div>
              <p className="text-gray-300/80 text-base italic max-sm:text-sm">
                " {user.review} "
              </p>
              <img
                src={user.company}
                alt={user.index}
                width={150}
                height={50}
                className="mt-5 max-sm:w-[100px]"
              />
            </div>
          ))}
          {userReview.map((user, index) => (
            <div
              key={`main-${index}`}
              className="bg-[#17171a] px-10 py-10 max-sm:py-6 w-[500px] max-sm:w-[300px] max-md:w-[320px] max-md:h-[400px]  max-sm:h-[400px] flex-shrink-0   space-y-5 rounded-2xl"
            >
              <img
                src={user.profileUrl}
                className="rounded-full max-sm:w-[50px]"
                alt={user.name}
                width={70}
                height={24}
              />
              <div>
                <p className="text-white font-sans text-xl max-sm:text-sm">
                  {user.name}
                </p>
                <span className="text-gray-400 text-sm">{user.job}</span>
              </div>
              <p className="text-gray-300/80 text-base italic max-sm:text-sm">
                " {user.review} "
              </p>
              <img
                src={user.company}
                alt={user.index}
                width={150}
                height={50}
                className="mt-5 max-sm:w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousal;
