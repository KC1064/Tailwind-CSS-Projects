import React from "react";

const Body = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-center">
        <img src="./assets/Blue-Shape.svg" alt="" className="-rotate-[45deg] h-64"/>
        <img src="./assets/Pink-Shape.svg" alt="" className="absolute h-64 -rotate-[30deg]"/>
        <img src="./assets/Purple-Shape.svg" alt="" className="absolute h-64 -rotate-[15deg]"/>
        <img src="./assets/Hero-Model.png" alt="" srcset="" className="absolute h-64"/>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-playfair font-bold leading-tight">Host your website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-500">With  Hosterr, get your website and running in no less than 5 minutes with the most
          most competitive pricing packages available oline.</p>
        <form action="" className="flex flex-col gap-1">
        <input type="text" placeholder="Enter e-mail address" className="font-lato rounded-md px-3 py-3"/>
        <button className="rounded-md px-4 py-3 bg-blue-700 text-white font-lato hover:bg-blue-500" >Join Waitlist</button>
      </form>
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default Body;
