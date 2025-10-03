import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Works() {
  return (
    <>
      {/* Text area */}
      <section className="flex flex-col items-start justify-start gap-8">
        {/* Indicator */}
        <div className=" bg-blue/10 flex items-center px-3 gap-2 rounded-2xl py-1 text-blue ">
          <GlobeAltIcon className="size-4 " />
          <p className="text-sm text-blue/80 font-medium">Recent Projects</p>
        </div>

        {/* Name and address */}
        <h1 className="text-5xl font-medium leading-snug">
          My Web Development <br />
          Journey
        </h1>
        <p className="text-gray text-base w-3/6">
          Every project I build is more than just code - it’s a reflection of
          how I’m learning, experimenting, and improving as a developer.
        </p>

        {/* Works */}
        <div className=" w-full h-auto mt-8 flex flex-col gap-24">
          <div className=" w-full h-[48rem] flex flex-col justify-start  ">
            {/* <img
              src="./src/assets/images/ss.png"
              alt=""
              className="w-full h-auto object-contain  "
            /> */}
            <div className="bg-blue-50 h-full w-full object-contain"></div>

            <h1 className="text-lg pt-6"> Project title</h1>
            <p className="text-base  text-gray"> Description and function</p>
          </div>

          <div className=" w-full h-[48rem] flex flex-col justify-start ">
            {/* <img
              src="./src/assets/images/ss.png"
              alt=""
              className="w-full h-auto object-contain  "
            /> */}
            <div className="bg-blue-50 h-full w-full object-contain"></div>

            <h1 className="text-lg pt-6"> Project title</h1>
            <p className="text-base  text-gray"> Description and function</p>
          </div>

          <div className=" w-full h-[48rem] flex flex-col justify-start ">
            {/* <img
              src="./src/assets/images/ss.png"
              alt=""
              className="w-full h-auto object-contain  "
            /> */}
            <div className="bg-blue-50 h-full w-full object-contain"></div>

            <h1 className="text-lg pt-6"> Project title</h1>
            <p className="text-base  text-gray"> Description and function</p>
          </div>
        </div>
      </section>
    </>
  );
}
