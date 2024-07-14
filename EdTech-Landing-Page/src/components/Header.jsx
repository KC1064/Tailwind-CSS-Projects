import React from "react";

const Header = () => {
  return (
    <div className="w-full px-2 md:flex md:py-4 md:px-5 md:items-center md:justify-center lg:px-8">
      <div className="flex justify-between w-[100%] md:h-auto md:items-center">
        <img src="./images/logo.svg" alt="logo" className="h-10 w-auto md:h-12 flex md:items-center" />
        <div className="hidden md:flex md:items-center md:justify-center md:bg-gray-100 md:rounded-full">
        <a href="" className="hover:bg-white md:rounded-full px-3 py-1.5 font-poppins text-sm">Intro</a>
        <a href="" className="hover:bg-white md:rounded-full px-4 py-1.5 font-poppins text-sm">Pricing</a>
        <a href="" className="hover:bg-white md:rounded-full px-2 py-1.5 font-poppins text-sm">Testimonials</a>
        <a href="" className="hover:bg-white md:rounded-full px-2 py-1.5 font-poppins text-sm">Features</a>
      </div>
        <button className="text-sm border-none bg-black text-white rounded-full font-semibold px-3 font-spline w-[139px] hover:bg-primary lg:h-8 md:h-[40px]">
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Header;
