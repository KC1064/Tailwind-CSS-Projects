import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col text-center px-3">
      <h1 className="text-3xl font-spline font-bold">
        EVERYTHING YOU NEED IN ONE COMMUNITY
      </h1>
      <p className="pt-5 font-poppins">
        Unleashing your digital potential for lasting success
      </p>
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/illustration-mentors.svg"
          alt=""
          className="w-[250px] h-[250px]"
        />
        <h3 className="text-xl font-spline font-bold pb-1">EXPERT MENTORS</h3>
        <p className="font-spline leading-7">
          Get personalized guidance from expert mentors to take your coding
          skills to the next level.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/illustration-networking.svg"
          alt=""
          className="w-[250px] h-[250px]"
        />
        <h3 className="text-xl font-spline font-bold pb-1">NETWORKING</h3>
        <p className="font-spline leading-7">
          Connect with like-minded coders from around the world and collaborate
          on exciting projects.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/illustration-courses.svg"
          alt=""
          className="w-[250px] h-[250px]"
        />
        <h3 className="text-xl font-spline font-bold pb-1 mt-4">COURSES</h3>
        <p className="font-spline leading-7">
          Exclusive courses in Full Stack, AI, Blockchain and more to help you
          stay ahead of the curve.
        </p>
      </div>
    </div>
  );
};

export default Features;
