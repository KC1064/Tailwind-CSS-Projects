import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-3xl font-spline font-bold leading">
        SIMPLE NO-TRICKS PRICING
      </h2>
      <h4 className="py-6 px-4 font-poppins">
        Everything you need to grow 10x for less than coffee.
      </h4>
      <div className="text-left border-solid border-2 border-gray-300 rounded-2xl">
        <h2 className="pt-10 text-xl font-bold font-spline px-9">
          Premium Elite Subscription
        </h2>
        <p className="pt-3 font-spline px-9">
          Join founders, freelancers, designers, FAANG engineers, indie hackers,
          and more in our 24/7 WhatsApp Group for less than a cup of coffee.
        </p>
        <p className="flex items-center gap-2 font-bold text-green-500 px-9 pt-10">
          What's included{" "}
          <div className="flex-auto h-[2px] bg-gray-200 mt-1"></div>
        </p>
        <div className="flex flex-col px-9">
          <h3 className="flex items-center gap-2 mt-4">
            <img src="./images/icon-check.svg" alt="" />
            Expert Mentors
          </h3>
          <h3 className="flex items-center gap-2 mt-4">
            <img src="./images/icon-check.svg" alt="" />
            Exclusive Courses
          </h3>
          <h3 className="flex items-center gap-2 mt-4">
            <img src="./images/icon-check.svg" alt="" />
            Netwroking & Collaboration
          </h3>
          <h3 className="flex items-center gap-2 mt-4">
            <img src="./images/icon-check.svg" alt="" />
            Career Guidance
          </h3>
        </div>
        <div>
          <div className="mt-6 bg-gray-100 text-center w-[96%] ml-2 rounded-lg mb-2">
            <h3 className="pt-6 font-poppins text-gray-500">
              Less than a cup of coffee
            </h3>
            <div className="flex justify-center gap-2 items-center font-spline">
            <h1 className="text-6xl">$5</h1> 
            <h1 className="text-4xl line-through">$1000</h1>
            </div>
            <button>Join Community</button>
            <div>
              {/* <img src="/images/avatars/Designer (5).png" alt="" />
            <img src="/images/avatars/Designer (6).png" alt="" />
            <img src="/images/avatars/Designer (7).png" alt="" />
            <img src="/images/avatars/pic-1.png" alt="" />
            <img src="/images/avatars/pic-2.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
