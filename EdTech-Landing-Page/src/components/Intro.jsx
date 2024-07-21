import React from "react";

const Intro = () => {
  return (
    <div className="mt-16 flex flex-col gap-10 md:gap-12">
      <div className="lg:flex">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-6xl font-spline font-bold text-center leading-none text-primary pt-3 md:text-8xl lg:text-left lg:text-9xl">
            ATTEND <span>LIVE</span>
            <span className="text-black"> CLASSES EVERY WEEK</span>
          </h1>

          <p className="text-center text-[16px] font-poppins md:text-[20px] md:px-20 md:py-6 lg:text-left lg:px-2">
            Join founders, freelancers, designers, FAANG engineers, indie
            hackers, and more in our 24/7 WhatsApp Group for less than a cup of
            coffee.
          </p>
          <div className="flex justify-center mr-4 lg:justify-start lg:px-0">
            <button
              className="flex justify-center items-center text-md px-6 rounded-full bg-primary ml-4 h-[80px] text-white font-poppins font-semibold
        md:h-[60px] md:w-[60%] lg:w-[70%]"
            >
            Join 24/7 Whatsapp + discord for $5/month
            </button>
          </div>
        </div>
        <div className="mt-8 lg:w-[150%]">
          <img
            src="./images/Designer (4).png"
            alt=""
            className="h-full w-auto"
          />
          {/* Have some padding to add */}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 mb-6 lg:flex-row lg:justify-between lg:px-20">
        <div className="flex gap-2 md:gap-4 items-center">
          <img src="./images/icon-guides.svg" alt="" />
          <h3 className="font-semibold font-spline">5+ Guides free</h3>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <img src="./images/icon-courses.svg" alt="" />
          <h3 className="font-semibold font-spline">
            Exclusive Courses and Projects
          </h3>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <img src="./images/icon-whatsapp.svg" alt="" />
          <h3 className=" font-semibold font-spline">
            24/7 WhatsApp Support Group
          </h3>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <img src="./images/icon-sessions.svg" alt="" />
          <h3 className=" font-semibold font-spline">1:1 Free Session</h3>
        </div>
      </div>
    </div>
  );
  className = "flex gap-4";
};

export default Intro;
