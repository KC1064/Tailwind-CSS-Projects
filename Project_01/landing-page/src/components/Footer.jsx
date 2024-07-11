import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-4 px-4 py-1">
      <a href="">Facebook</a>
      <a href="">Instagram</a>
      <a href="">Twitter</a>
      </div>
      <div className="flex gap-2 py-2  px-4">
        <img src="./assets/Help-Avatar.svg" alt="" srcset="" />
        <div className="leading-none flex flex-col justify-center ">
        <p className="font-playfair font-medium ">Have any questions?</p>
        <p className="font-playfair font-bold">Talk to a specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
