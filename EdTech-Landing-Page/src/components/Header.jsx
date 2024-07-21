import React from "react";

const Header = () => {
  return (
    <div className="w-full px-2 md:flex md:py-4 md:px-5 md:items-center md:justify-center lg:px-6">
      <div className="flex justify-between w-[100%] md:h-auto md:items-center">
        <img
          src="./images/logo.svg"
          alt="logo"
          className="h-10 w-auto md:h-12 flex md:items-center lg:h-14"
        />
        <div className="hidden md:flex md:items-center md:justify-center md:bg-gray-100 md:rounded-full lg:h-[50px] lg:w-[400px]">
          <a
            href=""
            className="hover:bg-white md:rounded-full px-3 py-1.5 font-poppins text-sm lg:text-lg lg:text-gray-400"
          >
            Intro
          </a>
          <a
            href=""
            className="hover:bg-white md:rounded-full px-4 py-1.5 font-poppins text-sm lg:text-lg lg:text-gray-400"
          >
            Pricing
          </a>
          <a
            href=""
            className="hover:bg-white md:rounded-full px-2 py-1.5 font-poppins text-sm lg:text-lg lg:text-gray-400"
          >
            Testimonials
          </a>
          <a
            href=""
            className="hover:bg-white md:rounded-full px-2 py-1.5 font-poppins text-sm lg:text-lg lg:text-gray-400"
          >
            Features
          </a>
        </div>
        <button className="text-sm border-none bg-black text-white rounded-full font-semibold px-3 font-spline w-[139px] hover:bg-primary lg:h-8 md:h-[40px] lg:h-[50px] lg:w-[160px] lg:text-[16px]">
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Header;
