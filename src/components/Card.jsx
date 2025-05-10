import React from "react";
import { cardItems } from "../constant";

const Card = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-48 mt-10 ">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className={`border border-gray-800 rounded-xl bg-[#17171a] px-10 py-10 space-y-2 w-full flex flex-col ${
                  index % 2 === 1 ? "evenCardDiv" : " oddCardDiv"
                }   md:even:flex-col-reverse`}
              >
                <div>
                  <h4 className="text-white text-xl lg:text-2xl">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="mt-10 w-full overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto px-5 py-5 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
