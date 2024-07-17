import React from "react";

const Footer = () => {
  return (
    <div className="px-3">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 ">
        <img
          src="./images/company-logos/adobe.svg"
          alt=""
          className="h-7 w-auto"
        />
        <img
          src="./images/company-logos/airbnb.svg"
          alt=""
          className="h-7 w-auto pr-2"
        />
        <img
          src="./images/company-logos/figma.svg"
          alt=""
          className="h-7 w-auto"
        />
        <img
          src="./images/company-logos/framer.svg"
          alt=""
          className="h-7 w-auto"
        />
        <img
          src="./images/company-logos/google.svg"
          alt=""
          className="h-7 w-auto"
        />
        <img
          src="./images/company-logos/dropbox.svg"
          alt=""
          className="h-7 w-auto"
        />
      </div>
      <div>
        <h2>GAIN A COMPETITIVE EDGE IN JOB MARKET</h2>
        <p>
          Join founders, freelancers, designers, FAANG engineers, indie hackers,
          and more in or 24/7 WhatsApp Group for less than a cup of coffee.
        </p>
        <h3>WHAT YOU'LL GET</h3>
        <div>
          <img src="" alt="" />
          <p>Comprehensive guides, projects & courses</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Exclusive job + internship postings</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Comprehensive guides, projects & courses</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
