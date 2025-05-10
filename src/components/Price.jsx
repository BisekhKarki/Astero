import React from "react";
import { priceCard } from "../constant";

const Price = ({ currentIndex }) => {
  return (
    <div className=" grid xl:grid-cols-3 gap-5 px-12 mt-10 priceCardAnimation">
      {priceCard.map((item, index) => (
        <div
          key={index}
          className={`border  rounded-2xl bg-[#17171a] px-10 py-5 flex flex-col space-y-1 ${
            item.index === 1 ? "animatePriceBorder " : "border-gray-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <p className="text-gray-300 text-3xl">{item.name}</p>
            {item.badge && (
              <p className="bg-[#123C24] rounded-3xl text-[#47D687] px-4 text-center py-1">
                {item.badge}
              </p>
            )}
          </div>

          {item.originalPrice && item.discountedPrice ? (
            <div
              className={`flex relative items-end gap-3 h-[70px] overflow-hidden mt-4`}
            >
              <p
                className={`text-gray-600 text-3xl line-through transition-all duration-300 ease-in-out ${
                  currentIndex === 0
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 hidden"
                }`}
              >
                {item.originalPrice}
              </p>
              <p
                className={`text-gray-300 text-5xl transition-all duration-300 ease-in-out transform ${
                  currentIndex === 0 ? "translate-x-1" : "translate-x-0"
                }`}
              >
                {item.discountedPrice}
              </p>
            </div>
          ) : item.price ? (
            <p className="text-gray-300 text-5xl mt-10">{item.price}</p>
          ) : (
            <p className="text-gray-300 text-5xl mt-5">
              {item.discountedPrice}
            </p>
          )}

          <p className="text-gray-300 ">
            {currentIndex === 0 ? item.billingAnnually : item.billingMonthly}
          </p>
          <hr className="mt-5 mb-5 text-gray-700" />
          <p className="text-gray-300 py-5">{item.description}</p>
          <ul className="space-y-1 text-gray-300">
            {item.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <img width={24} height={24} src={item.icon} alt={item.index} />
                <p>{feature}</p>
              </div>
            ))}
          </ul>
          <button
            className={`mt-10 w-full px-10 py-3 rounded-xl text-white font-sans text-xl cursor-pointer ${
              item.name === "Pro"
                ? "bg-[#5024FF] border border-[#5024FF] "
                : "bg-[#222228] border border-gray-700"
            }`}
          >
            {item.cta}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Price;
