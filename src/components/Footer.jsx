import React from "react";

const Footer = () => {
  return (
    <div
      className="text-white bg-gray-900 py-5 px-10 flex justify-between"
      id="Contact"
    >
      <p className="max-sm:text-[12px]">
        &copy;{new Date().getFullYear()} {""}Astero.All rights reserved.
      </p>
      <p className="max-sm:text-[12px]">Terms & Conditions</p>
      <p className="max-sm:text-[12px]">Privacy policy</p>
    </div>
  );
};

export default Footer;
