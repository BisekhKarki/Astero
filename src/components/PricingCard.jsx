import { useState } from "react";
import Price from "./Price";
import AutoLogoCarousal from "./AutoLogoCarousal";

const cardButton = [
  {
    index: 0,
    name: "Yearly",
  },
  {
    index: 1,
    name: "Montly",
  },
];

const PricingCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="">
      <div className="mt-5 flex justify-center items-center">
        <div className="border border-gray-600 px-2 py-1 rounded-md space-x-1">
          {cardButton.map((item) => (
            <button
              className={`text-gray-400  cursor-pointer text-xl max-md:text-sm max-md:px-20 max-md:py-3 px-10 py-2 transition-colors transform duration-300 ease-in-out ${
                currentIndex === item.index &&
                "bg-[#5024FF] text-white rounded-md"
              }  `}
              key={item.index}
              onClick={() => setCurrentIndex(item.index)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <Price currentIndex={currentIndex} />
      <div className="mt-5 mb-10" />
      <AutoLogoCarousal />
    </div>
  );
};

export default PricingCard;
