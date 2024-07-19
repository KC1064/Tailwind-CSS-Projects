import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-center justify-center align-middle md:flex-row md:align-middle md:justify-between md:px-6 md:pb-4">
      <div className="flex justify-center pt-6 md:order-1">
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="flex justify-center gap-6 py-6 md:order-3">
        <img
          src="./images/icon-twitter.svg"
          alt=""
          className="grayscale  hover:grayscale-0"
        />
        <img
          src="./images/icon-youtube.svg"
          alt=""
          className="grayscale  hover:grayscale-0"
        />
        <img
          src="./images/icon-linkedin.svg"
          alt=""
          className="grayscale  hover:grayscale-0"
        />
        <img
          src="./images/icon-instagram.svg"
          alt=""
          className="grayscale  hover:grayscale-0"
        />
      </div>
      {/* <div className="text-center font-poppins font-semibold text-gray-400 md:order-2 md:align-middle md:flex">
        2023©30DAYSCODING
      </div> */}

      <div className="flex items-center justify-center h-[72px] text-center font-poppins font-semibold text-gray-400 md:order-2 md:align-middle md:pt-1">
        2023©30DAYSCODING
      </div>
    </div>
  );
};

export default Footer;
