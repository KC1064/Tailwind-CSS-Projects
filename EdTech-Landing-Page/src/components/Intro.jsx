import React from "react";

const Intro = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-spline font-bold text-center leading-none text-primary pt-3 md:text-8xl">ATTEND <span>LIVE</span><span className="text-black"> CLASSES EVERY WEEK</span></h1>
        <p className="text-center text-lg font-poppins pb-6">Join founders, freelancers, designers, FAANG engineers, indie hackers, 
          and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
        <div className="flex justify-center mr-4">
        <button className="flex justify-center items-center text-lg rounded-full bg-primary ml-4 h-[80px] text-white font-poppins font-semibold
        md:h-[60px] md:w-[60%]">Join 24/7 Whatsapp + discord for $5/month</button>
        </div>
      </div>
      <div className="mt-8">
        <img src="./images/Designer (4).png" alt="" className="h-full w-auto" />
      </div>
      <div>
        <div>
          <img src="./images/icon-guides.svg" alt="" />
          <h3>5+ Guides free</h3>
        </div>
        <div>
          <img src="./images/icon-courses.svg" alt="" />
          <h3>Exclusive Courses and Projects</h3>
        </div>
        <div>
          <img src="./images/icon-whatsapp.svg" alt="" />
          <h3>24/7 WhatsApp Support Group</h3>
        </div>
        <div>
          <img src="./images/icon-sessions.svg" alt="" />
          <h3>1:1 Free Session</h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
