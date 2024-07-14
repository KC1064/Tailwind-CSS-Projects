import React from "react";

const Testimonials = () => {
  return (
    <div className="flex text-center flex-col gap-12 px-4">
      {/* Tony Stark */}
      <div className="space-y-6 group">
        <div className="flex-col w-full">
          <div className="flex justify-center">
            <img
              src="./images/avatars/Designer (5).png"
              alt=""
              className="rounded-full h-[96px] w-[96px] group-hover:scale-125 transition-all duration-200"
            />
          </div>
          <p className="text-center leading-6 pt-2 pb-1 font-serif text-md font-normal md:text-lg md:px-20">
            "This community has been a game-changer for my career. The exclusive
            courses and personalized guidance from expert mentors have helped me
            take my coding skills to the next level."
          </p>
          <p className="text-center leading-none pt-2 font-semibold font-spline">
            Tony Stark
          </p>
          <p className="text-center ">SDE at Google</p>
          <div className="flex justify-center pt-2">
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
          </div>
        </div>
      </div>

      {/* Jerry */}
      <div className="space-y-6 group">
        <div className="flex-col w-full">
          <div className="flex justify-center">
            <img
              src="./images/avatars/Designer (6).png"
              alt=""
              className="rounded-full h-[96px] w-[96px] group-hover:scale-125 transition-all duration-200"
            />
          </div>
          <p className="text-center leading-6 pt-2 pb-1 font-serif text-md font-normal  md:text-lg md:px-20">
            "The exclusive courses and bi-weekly live sessions have been
            incredibly insightful, and collaborating on open-source projects has
            been a great way to build my portfolio. I highly recommend this
            community."
          </p>
          <p className="text-center leading-none pt-2 font-semibold font-spline">
            Jerry Mouse
          </p>
          <p className="text-center ">SWE at Tesla</p>
          <div className="flex justify-center pt-2">
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
          </div>
        </div>
      </div>

      {/* Scooby Doo */}
      <div className="space-y-6 group">
        <div className="flex-col w-full">
          <div className="flex justify-center">
            <img
              src="./images/avatars/Designer (7).png"
              alt=""
              className="rounded-full h-[96px] w-[96px] group-hover:scale-125 transition-all duration-200"
            />
          </div>
          <p className="text-center leading-6 pt-2 pb-1 font-serif text-md font-normal md:text-lg md:px-20">
            "Joining this community was one of the best decisions I've made for
            my career. The 24/7 WhatsApp group has been an incredible resource
            for networking and collaboration. I highly recommend this
            community."
          </p>
          <p className="text-center leading-none pt-2 font-semibold font-spline">
            Scooby Doo
          </p>
          <p className="text-center ">SWE at Microsoft</p>
          <div className="flex justify-center pt-2">
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
            <img src="./images/icon-star.svg" alt="" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
