import React from "react";

const Header = () => {
  return (
    <div className="px-3.5 py-3 w-full md:flex md:py-4 md:px-5 md:items-center md:justify-center">
      <div className="flex justify-between w-[100%]">
        <img src="./images/logo.svg" alt="logo" className="h-10 w-auto md:h-12" />
        <div className="hidden md:flex md:items-center md:justify-center md:bg-gray-100 md:rounded-full md:px-2">
        <a href="" className="hover:bg-white md:rounded-full px-3 py-1.5 font-poppins text-sm">Intro</a>
        <a href="" className="hover:bg-white md:rounded-full px-4 py-1.5 font-poppins text-sm">Pricing</a>
        <a href="" className="hover:bg-white md:rounded-full px-2 py-1.5 font-poppins text-sm">Testimonials</a>
        <a href="" className="hover:bg-white md:rounded-full px-2 py-1.5 font-poppins text-sm">Features</a>
      </div>
        <button className="text-sm bg-black text-white rounded-full font-bold px-3 font-poppins hover:bg-green-500">
          Join Community
        </button>
      </div>
    </div>
  );
};

export default Header;
