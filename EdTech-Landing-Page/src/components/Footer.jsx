import React from "react";

const Footer = () => {
  return (
    <div className="px-2">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 py-14 ">
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
      <div class="flex flex-col items-center justify-center align-middle">
        <h2 className="text-3xl font-bold font-spline text-center">
          GAIN A COMPETITIVE EDGE IN JOB MARKET
        </h2>
        <p className="text-center pt-6 font-sans text-md leading-7">
          Join founders, freelancers, designers, FAANG engineers, indie hackers,
          and more in our 24/7 WhatsApp Group for less than a cup of coffee.
        </p>
        <div class="flex flex-col justify-center text-center items-center py-4 gap-3">
          <h3 className="pt-6 text-primary text-sm font-poppins font-extrabold tracking-wider pb-5">
            WHAT YOU'LL GET
          </h3>
          <div class="flex flex-col items-center gap-3">
            <img src="./images/icon-guides-2.svg" alt="" class="h-6 w-6" />
            <p>Comprehensive guides, projects & courses</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <img src="./images/icon-job.svg" alt="" class="h-6 w-6" />
            <p>Exclusive job + internship postings</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <img src="./images/icon-tips.svg" alt="" class="h-6 w-6" />
            <p>Comprehensive guides, projects & courses</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="./images/illustration-job.svg" alt="" />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Footer;
