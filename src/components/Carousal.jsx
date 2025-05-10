import React from "react";
import { imageUrls } from "../constant";

const Carousal = () => {
  return (
    <div className="relative overflow-hidden py-4">
      <div className=" absolute border-none inset-0 bg-[linear-gradient(to_right,black_15%,_transparent_20%,_transparent_80%,_black_85%)] pointer-events-none z-20"></div>
      <div className="">
        <div className="flex w-[200%] animate-infinite-scroll gap-20 ">
          {/* Clone set */}
          {imageUrls.map((item, index) => (
            <img
              key={`Clone-${index}`}
              src={`..${item.url}`}
              alt={item.name}
              className="w-[10rem] h-[3.4rem]"
            />
          ))}
          {/* Original image */}
          {imageUrls.map((item, index) => (
            <img
              key={`original-${index}`}
              src={`..${item.url}`}
              alt={item.name}
              className="w-[10rem] h-[3.4rem]"
            />
          ))}
          {/* Duplicated Image  */}
          {imageUrls.map((item, index) => (
            <img
              key={`Clone2-${index}`}
              src={`..${item.url}`}
              alt={item.name}
              className="w-[10rem] h-[3.4rem] "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
