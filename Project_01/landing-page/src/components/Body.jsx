import React from "react";

const Body = () => {
  return (
    <div className="px-4 md:px-8 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2">
        <img src="./assets/Blue-Shape.svg" alt="" className="-rotate-[45deg] h-80 lg:h-[400px]"/>
        <img src="./assets/Pink-Shape.svg" alt="" className="absolute h-80 -rotate-[30deg] lg:h-[400px]"/>
        <img src="./assets/Purple-Shape.svg" alt="" className="absolute h-80 -rotate-[15deg] lg:h-[400px]"/>
        <img src="./assets/Hero-Model.png" alt="" srcset="" className="absolute h-80 lg:h-[400px]"/>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-playfair font-bold leading-tight md:text-6xl">Host your website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-400 md:text-s md:text-gray-600">With  Hosterr, get your website and running in no less than 5 minutes with the most
          most competitive pricing packages available oline.</p>
        <form action="" className="flex flex-col gap-1 md:flex md:flex-row md:gap-2">
        <input type="text" placeholder="Enter e-mail address" className="font-lato rounded-md px-3 py-3 md:w-72"/>
        <button className="rounded-md px-4 py-3 bg-blue-700 text-white font-lato hover:bg-blue-500 md:w-32" >Join Waitlist</button>
      </form>
      <div className="flex gap-1 py-1 align-middle md:py-2">
        <img src="./assets/Checkmark.svg" alt="checkmark"/>
        <p className="text-m font-lato text-gray-400">No spam, ever. Unsubscribe anytime</p>
      </div>

      </div>
    </div>
  );
};

export default Body;
