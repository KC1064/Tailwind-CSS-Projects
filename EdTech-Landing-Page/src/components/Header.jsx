import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div>
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div className="items-center justify-center flex rounded-full bg-gray-100 gap-1 px-2 ">
        <a href="" className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full py-2 px-4">Intro</a>
        <a href="" className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full py-2 px-3">Pricing</a>
        <a href="" className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full py-2 px-2">Testimonials</a>
        <a href="" className="text-sm font-medium inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full py-2 px-2">Features</a>
      </div>
      <div>
        <button className="bg-black text-white rounded-full px-6 py-2">Join Community</button>
      </div>
    </div>
  );
};

export default Header;
