import React from "react";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <div className="mt-24 lg:mt-48">
      <h1 class="text-base mb-8 pb-4 border-b border-gray-200" id="featured">
        Featured Works
      </h1>

      <Link to="/project/2" className="w-full flex flex-col group mb-12">
        <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
          <video
            src="/vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          <div>
            <h1 className="text-lg md:text-xl">Hakban</h1>
            <p className="text-sm md:text-lg text-gray">
              Job application tracking made easy
            </p>
          </div>

          <p id="others" className="text-base md:text-xl text-gray">
            2026
          </p>
        </div>
      </Link>

      <Link to="/project/1" className="w-full flex flex-col group mb-12">
        <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
          <img
            src="/img2.png"
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          <div>
            <h1 className="text-lg md:text-xl">Itinera</h1>
            <p className="text-sm md:text-lg text-gray">
              Itinerary planning made easy
            </p>
          </div>

          <p className="text-base md:text-xl text-gray">2025</p>
        </div>
      </Link>
    </div>
  );
};

export default Featured;
