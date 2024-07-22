// import React from "react";

// const Pricing = () => {
//   return (
//     <div className="flex flex-col text-center">
//       <h2 className="text-3xl font-spline font-bold leading lg:text-6xl">
//         SIMPLE NO-TRICKS PRICING
//       </h2>
//       <h4 className="py-6 px-4 font-poppins">
//         Everything you need to grow 10x for less than coffee.
//       </h4>
//         <div className="flex justify-center md:px-6">
//           <div className="text-left border-solid border-2 border-gray-300 rounded-2xl md:w-[90%]">
//             <h2 className="pt-10 text-xl font-bold font-spline px-9">
//               Premium Elite Subscription
//             </h2>
//             <p className="pt-3 font-spline px-9">
//               Join founders, freelancers, designers, FAANG engineers, indie
//               hackers, and more in our 24/7 WhatsApp Group for less than a cup
//               of coffee.
//             </p>
//             <p className="flex items-center gap-2 font-bold text-green-500 px-9 pt-10">
//               What's included{" "}
//               <div className="flex-auto h-[2px] bg-gray-200 mt-1"></div>
//             </p>
//             <div className="flex flex-col px-9 md:flex-row md:flex-wrap md:gap-x-16">
//               <h3 className="flex items-center gap-2 mt-4">
//                 <img src="./images/icon-check.svg" alt="" />
//                 Expert Mentors
//               </h3>
//               <h3 className="flex items-center gap-2 mt-4 md:ml-[90px]">
//                 <img src="./images/icon-check.svg" alt="" />
//                 Exclusive Courses
//               </h3>
//               <h3 className="flex items-center gap-2 mt-4">
//                 <img src="./images/icon-check.svg" alt="" />
//                 Netwroking & Collaboration
//               </h3>
//               <h3 className="flex items-center gap-2 mt-4">
//                 <img src="./images/icon-check.svg" alt="" />
//                 Career Guidance
//               </h3>
//             </div>
//             <div className="flex ">
//               <div className="h-[400px] mt-5 py-5 bg-gray-100 text-center w-[96%] ml-2 rounded-lg mb-2 md:ml-3">
//                 <h3 className="pt-14 font-poppins text-gray-500 font-bold">
//                   Less than a cup of coffee
//                 </h3>
//                 <div className="flex justify-center gap-2 items-center font-spline py-7">
//                   <h1 className="text-6xl">$5</h1>
//                   <h1 className="text-4xl line-through text-gray-400">$1000</h1>
//                 </div>
//                 <button className="bg-primary rounded-full h-[46px] w-[180px] font-spline text-white font-bold">
//                   Join Community
//                 </button>
//                 <div className="flex justify-center pt-3">
//                   <img
//                     src="/images/avatars/Designer (5).png"
//                     alt=""
//                     className="w-[36px] h-[36px] rounded-full realtive hover:scale-125 ease-in-out z-20 transistion duration-200"
//                   />
//                   <img
//                     src="/images/avatars/Designer (6).png"
//                     alt=""
//                     className="w-[36px] h-[36px] rounded-full realtive hover:scale-125 ease-in-out z-20 transistion duration-200"
//                   />
//                   <img
//                     src="/images/avatars/Designer (7).png"
//                     alt=""
//                     className="w-[36px] h-[36px] rounded-full realtive hover:scale-125 ease-in-out z-20 transistion duration-200"
//                   />
//                   <img
//                     src="/images/avatars/pic-1.png"
//                     alt=""
//                     className="w-[36px] h-[36px] rounded-full realtive hover:scale-125 ease-in-out z-20 transistion duration-200"
//                   />
//                   <img
//                     src="/images/avatars/pic-2.png"
//                     alt=""
//                     className="w-[36px] h-[36px] rounded-full realtive hover:scale-125 ease-in-out z-20 transistion duration-200"
//                   />
//                 </div>
//                 <p className="pt-2 font-semibold font-poppins">
//                   100+ Active Members
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Pricing;

import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col text-center lg:py-20 lg:px-40">
      <h2 className="text-3xl font-spline font-bold leading lg:text-6xl lg:leading-tight">
        SIMPLE NO-TRICKS PRICING
      </h2>
      <h4 className="py-6 px-4 font-poppins lg:text-2xl lg:leading-normal">
        Everything you need to grow 10x for less than coffee.
      </h4>
      <div className="flex justify-center md:px-6 lg:px-0 lg:flex-row">
        <div className="text-left border-solid border-2 border-gray-300 rounded-2xl md:w-[90%] lg:w-[70%] lg:p-10">
          <h2 className="pt-10 text-xl font-bold font-spline px-9 lg:text-3xl lg:px-0">
            Premium Elite Subscription
          </h2>
          <p className="pt-3 font-spline px-9 lg:text-lg lg:px-0">
            Join founders, freelancers, designers, FAANG engineers, indie
            hackers, and more in our 24/7 WhatsApp Group for less than a cup
            of coffee.
          </p>
          <p className="flex items-center gap-2 font-bold text-green-500 px-9 pt-10 lg:px-0 lg:text-xl">
            What's included{" "}
            <div className="flex-auto h-[2px] bg-gray-200 mt-1 lg:mt-2"></div>
          </p>
          <div className="flex flex-col px-9 md:flex-row md:flex-wrap md:gap-x-16 lg:px-0">
            <h3 className="flex items-center gap-2 mt-4 lg:text-lg">
              <img src="./images/icon-check.svg" alt="" />
              Expert Mentors
            </h3>
            <h3 className="flex items-center gap-2 mt-4 md:ml-[90px] lg:text-lg">
              <img src="./images/icon-check.svg" alt="" />
              Exclusive Courses
            </h3>
            <h3 className="flex items-center gap-2 mt-4 lg:text-lg">
              <img src="./images/icon-check.svg" alt="" />
              Networking & Collaboration
            </h3>
            <h3 className="flex items-center gap-2 mt-4 lg:text-lg">
              <img src="./images/icon-check.svg" alt="" />
              Career Guidance
            </h3>
          </div>
          <div className="flex ">
            <div className="h-[400px] mt-5 py-5 bg-gray-100 text-center w-[96%] ml-2 rounded-lg mb-2 md:ml-3 lg:h-[500px] lg:ml-0 lg:rounded-3xl">
              <h3 className="pt-14 font-poppins text-gray-500 font-bold lg:text-xl">
                Less than a cup of coffee
              </h3>
              <div className="flex justify-center gap-2 items-center font-spline py-7 lg:py-10">
                <h1 className="text-6xl lg:text-8xl">$5</h1>
                <h1 className="text-4xl line-through text-gray-400 lg:text-5xl">$1000</h1>
              </div>
              <button className="bg-primary rounded-full h-[46px] w-[180px] font-spline text-white font-bold lg:h-[56px] lg:w-[220px]">
                Join Community
              </button>
              <div className="flex justify-center pt-3 lg:pt-5">
                <img
                  src="/images/avatars/Designer (5).png"
                  alt=""
                  className="w-[36px] h-[36px] rounded-full relative hover:scale-125 ease-in-out z-20 transition duration-200 lg:w-[48px] lg:h-[48px]"
                />
                <img
                  src="/images/avatars/Designer (6).png"
                  alt=""
                  className="w-[36px] h-[36px] rounded-full relative hover:scale-125 ease-in-out z-20 transition duration-200 lg:w-[48px] lg:h-[48px]"
                />
                <img
                  src="/images/avatars/Designer (7).png"
                  alt=""
                  className="w-[36px] h-[36px] rounded-full relative hover:scale-125 ease-in-out z-20 transition duration-200 lg:w-[48px] lg:h-[48px]"
                />
                <img
                  src="/images/avatars/pic-1.png"
                  alt=""
                  className="w-[36px] h-[36px] rounded-full relative hover:scale-125 ease-in-out z-20 transition duration-200 lg:w-[48px] lg:h-[48px]"
                />
                <img
                  src="/images/avatars/pic-2.png"
                  alt=""
                  className="w-[36px] h-[36px] rounded-full relative hover:scale-125 ease-in-out z-20 transition duration-200 lg:w-[48px] lg:h-[48px]"
                />
              </div>
              <p className="pt-2 font-semibold font-poppins lg:pt-3 lg:text-lg">
                100+ Active Members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
