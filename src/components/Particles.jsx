import React from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

const FallingStar = () => {
  const particlesInit = async (engine) => {
    await loadBasic(engine);
  };

  return (
    <Particles
      id="falling-stars"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#000000",
        },
        fpsLimit: 60,
        emitters: {
          direction: "bottom-right",
          rate: {
            delay: 0.8,
            quantity: 1,
          },
          position: {
            x: 0,
            y: 0,
          },
        },
        particles: {
          number: {
            value: 0,
          },
          shape: {
            type: "circle",
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              startValue: "max",
              count: 1,
              speed: 0.5,
              decay: 0.05,
              sync: true,
            },
          },
          size: {
            value: 2,
            animation: {
              enable: true,
              startValue: "max",
              count: 1,
              speed: 2,
              decay: 0.05,
              sync: true,
            },
          },
          move: {
            enable: true,
            speed: 400,
            direction: "bottom-right",
            straight: true,
            outModes: {
              default: "destroy",
            },
            trail: {
              enable: true,
              fillColor: "#000000",
              length: 15,
            },
          },
        },
      }}
    />
  );
};

export default FallingStar;
