import React from "react";

const Company = () => {
  return (
    <div className="px-2">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 py-14 lg:gap-x-6">
        <img
          src="./images/company-logos/adobe.svg"
          alt=""
          className="h-7 w-auto md:h-9 lg:h-12"
        />
        <img
          src="./images/company-logos/airbnb.svg"
          alt=""
          className="h-7 w-auto pr-2 md:h-9 lg:h-12"
        />
        <img
          src="./images/company-logos/figma.svg"
          alt=""
          className="h-7 w-auto md:h-9 lg:h-12"
        />
        <img
          src="./images/company-logos/framer.svg"
          alt=""
          className="h-7 w-auto md:h-9 lg:h-12"
        />
        <img
          src="./images/company-logos/google.svg"
          alt=""
          className="h-7 w-auto md:h-9 lg:h-12"
        />
        <img
          src="./images/company-logos/dropbox.svg"
          alt=""
          className="h-7 w-auto md:h-9 lg:h-12"
        />
      </div>
      <div className="lg:flex lg:w-[90%] lg:justify-between">
        <div class="flex flex-col items-center justify-center align-middle lg:w-[50%] lg:ml-20">
          <h2 className="text-3xl font-bold font-spline text-center lg:text-6xl lg:text-left">
            GAIN A COMPETITIVE EDGE IN JOB MARKET
          </h2>
          <p className="text-center pt-6 font-sans text-md leading-7 lg:text-2xl lg:text-left">
            Join founders, freelancers, designers, FAANG engineers, indie
            hackers, and more in our 24/7 WhatsApp Group for less than a cup of
            coffee.
          </p>
          {/* <div class="flex flex-col justify-center text-center items-center py-4 gap-3 ">
            <div className="pt-6 text-primary text-sm font-poppins font-extrabold tracking-wider pb-5 lg:justify-start lg:text-2xl">
              WHAT YOU'LL GET
            </div>
            <div class="flex flex-col items-center gap-3 lg:flex-row">
              <img src="./images/icon-guides-2.svg" alt="" class="h-6 w-6" />
              <p>Comprehensive guides, projects & courses</p>
            </div>
            <div class="flex flex-col items-center gap-3 lg:flex-row">
              <img src="./images/icon-job.svg" alt="" class="h-6 w-6" />
              <p>Exclusive job + internship postings</p>
            </div>
            <div class="flex flex-col items-center gap-3 lg:flex-row lg:justify-items-start">
              <img src="./images/icon-tips.svg" alt="" class="h-6 w-6" />
              <p>Comprehensive guides, projects & courses</p>
            </div>
          </div> */}
          <div class="flex flex-col justify-center text-center items-start py-4 gap-3 lg:w-full">
            <div className="pt-6 text-primary text-sm font-poppins font-extrabold tracking-wider pb-5 lg:justify-start lg:text-2xl">
              WHAT YOU'LL GET
            </div>
            {/* <div class="flex flex-col items-start gap-3 lg:flex-row">
              <img src="./images/icon-guides-2.svg" alt="" class="h-6 w-6 lg:h-8 lg:w-8" />
              <p className="lg:text-2xl lg:py-2">Comprehensive guides, projects & courses</p>
            </div> */}
            <div class="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
              <img
                src="./images/icon-guides-2.svg"
                alt=""
                class="h-6 w-6 lg:h-8 lg:w-8"
              />
              <p className="lg:text-2xl lg:py-2">
                Comprehensive guides, projects & courses
              </p>
            </div>

            <div class="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
              <img
                src="./images/icon-job.svg"
                alt=""
                class="h-6 w-6 lg:h-8 lg:w-8"
              />
              <p className="lg:text-2xl lg:py-2">
                Exclusive job + internship postings
              </p>
            </div>
            <div class="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
              <img
                src="./images/icon-tips.svg"
                alt=""
                class="h-6 w-6 lg:h-8 lg:w-8"
              />
              <p className="lg:text-2xl lg:py-2">
                Comprehensive guides, projects & courses
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center hover:rotate-[15deg] duration-100 lg:w-[50%] lg:h-[550px]">
          <img src="./images/illustration-job.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
