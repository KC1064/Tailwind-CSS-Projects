import React from "react";

const Intro = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-spline font-bold text-center leading-none text-primary pt-3">ATTEND<br/>LIVE<span className="text-black"> CLASSES EVERY WEEK</span></h1>
        <p className="text-center text-lg font-poppins pb-6">Join founders, freelancers, designers, FAANG engineers, indie hackers, 
          and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
        <div className="flex justify-center mr-4">
        <button className="px-6 py-2 text-lg rounded-full bg-primary ml-4 h-[80px]">Join 24/7 Whatsapp + discord for $5/month</button>
        </div>
      </div>
      <div>
        <img src="./images/Designer (4).png" alt="" />
      </div>
    </div>
  );
};

export default Intro;
