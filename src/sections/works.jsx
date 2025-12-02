import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <>
      {/* Text area */}
      <section className="flex flex-col items-start justify-start gap-8 ">
        {/* Indicator */}
        <div className="bg-blue/10 flex items-center px-3 gap-2 rounded-2xl py-1 text-blue">
          <GlobeAltIcon className="size-4" />
          <p className="text-sm text-blue/80 font-medium">Recent Projects</p>
        </div>

        {/* Name and address */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-snug">
          Turning Points In <br />
          My Journey
        </h1>
        <p className="text-gray text-sm sm:text-base max-w-xl">
          Every project I build is more than just code - it's a reflection of
          how I'm learning, experimenting, and improving as a developer.
        </p>

        {/* Works */}
        <div className="w-full flex flex-col gap-12 sm:gap-16 lg:gap-24">
          <div id="projects"></div>

          {/* Project 1 */}
          <Link to="/project/1" className="w-full flex flex-col group">
            <div className="relative w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
              <img
                src="./src/assets/images/img2.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl">
                  Project title
                </h1>
                <p className="text-sm sm:text-base text-gray">
                  Description and function
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray">2025</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link to="/project/2" className="w-full flex flex-col group">
            <div className="relative w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
              <img
                src="./src/assets/images/img1.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl">
                  Project title
                </h1>
                <p className="text-sm sm:text-base text-gray">
                  Description and function
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray">2025</p>
            </div>
          </Link>

          {/* Project 3 */}
          <Link to="/project/3" className="w-full flex flex-col group">
            <div className="relative w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
              <img
                src="./src/assets/images/img3.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl">
                  Project title
                </h1>
                <p className="text-sm sm:text-base text-gray">
                  Description and function
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray">2025</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
