import React from "react";
import mainLogo from "../assets/svg/brand.svg";
import cart from "../assets/svg/cart.svg";

const LastSection = () => {
  return (
    <footer className="bg-[#111014] text-white px-6 sm:px-10 lg:px-20 py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-2 md:gap-5">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <img src={mainLogo} alt="brand" width={150} />
          <p className="text-gray-400 text-sm">
            Scale Your Business Without Limits
          </p>
          <button className="flex items-center gap-2 bg-[#5E2FF4] hover:bg-[#4c25c9] text-white font-medium px-4 py-2 rounded-md transition">
            <img src={cart} alt="cart" width={24} height={24} />
            Get this template
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full md:w-auto text-xl">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">404</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter / X ↗
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Threads ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LastSection;
