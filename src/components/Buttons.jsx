import React from "react";

const Buttons = ({ text, icon, className }) => {
  return (
    <button className={`${className || ""}  rounded-md cursor-pointer`}>
      {icon && <img src={icon} width={20} height={20} />}
      {text}
    </button>
  );
};

export default Buttons;
