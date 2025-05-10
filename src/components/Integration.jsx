import React from "react";
import Heading from "./Heading";
import mainImage from "../assets/svg/mainlogoapp.svg";
import { appLogo, secondLogos } from "../constant";

const Integration = () => {
  return (
    <div className="mb-20 mt-28 space-y-10  integrationAnimation">
      <div className="flex justify-center items-center  ">
        <Heading
          paragraph={"Seamless Integrations"}
          className={
            "text-[#A1ADFF] px-7 py-2 border-none bg-[#17171a] rounded-md"
          }
        />
      </div>
      <div className="mt-2">
        <h1 className="text-white text-5xl text-center mt-10  font-serif max-sm:text-3xl max-md:text-4xl ">
          Instant 500+ App Integrations
        </h1>
        <p className="text-gray-400 text-center mt-5 max-sm:text-[12px] max-md:text-[15px]">
          Connect your favorite tools (CRMs, email platforms, payment
          processors,
          <br />
          messaging apps) in one click.
        </p>
      </div>
      <div className="  max-sm:mt-10  mt-28 relative left-1/2 flex w-[30rem] aspect-square border border-[#252134]  rounded-full -translate-x-1/2 scale-75 md:scale-100">
        <div className=" relative flex w-80  aspect-square m-auto border border-[#252134] rounded-full">
          <div className="w-[8rem] aspect-square m-auto p-[0.2rem] bgimage rounded-full">
            <img
              src={mainImage}
              alt="brainwave"
              width={48}
              height={48}
              className="flex items-center justify-center w-full h-full bg-[#4722cd] rounded-full animate-pulse"
            />
          </div>
          <ul>
            {secondLogos.map((second, index) => (
              <li
                key={index}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                style={{
                  transform: `rotate(${index * 90}deg)`,
                }}
              >
                <div
                  className={`relative -top-[1.6rem]  flex w-[3.2rem] h-[3.2rem] border border-[#ffffff]/15 rounded-xl `}
                  style={{
                    transform: `rotate(-${index * 90}deg)`,
                  }}
                >
                  <img
                    className="m-auto"
                    width={second.width}
                    height={second.height}
                    src={second.url}
                    alt={second.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {appLogo.map((app, index) => (
            <li
              key={index}
              className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
              style={{ transform: `rotate(${index * 45}deg)` }}
            >
              <div
                className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] ${
                  app.background ? "bg-white" : "bg-[#15131d]"
                } border border-[#ffffff]/15 rounded-xl`}
                style={{ transform: `rotate(-${index * 45}deg)` }}
              >
                <img
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  src={app.url}
                  alt={app.name}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Integration;
