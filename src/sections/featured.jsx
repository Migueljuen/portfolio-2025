import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";



function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
      style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
    />
  );
}


const Featured = () => {
  return (
    <div className="mt-32 lg:mt-48">
      <h1 class="text-base mb-8 pb-4 border-b border-gray-200" id="featured">
        Featured Works
      </h1>

      <Link to="/project/2" className="w-full flex flex-col group mb-32 md:mb-48">
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
            <p className="text-sm md:text-base text-gray mt-2 md:mt-0">
              Designed and developed Hakban, a simplified login-less job tracker.
            </p>
          </div>

          <p className="text-sm md:text-base  text-blue-600 mt-2 md:mt-0 text-right">UI/UX Design · Frontend Development</p>
        </div>
      </Link>

      <Link to="/project/1" className="w-full flex flex-col group mb-32 md:mb-48">
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
            <p className="text-sm md:text-base text-gray mt-2 md:mt-0">
              UI/UX and Frontend Developer for Itinera. A journey planner for everyone.
            </p>
          </div>

          <p className="text-sm md:text-base  text-blue-600 mt-2 md:mt-0  text-right">UI/UX Design · Frontend Development</p>
        </div>
      </Link>

      {/* Actual works */}


      <div class="mb-32 md:mb-48">
        <Link to="https://eventstruct.com/" target="_blank" rel="noopener noreferrer" className="w-full ">
          <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
            <LazyImage
              src="/eventstruct.webp"
              alt="Eventstruct"
              className="w-full md:w-5/6 mx-auto h-full object-contain transition-transform duration-300 "
            />
          </div>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-12 ">
          <div>
            <h1 className="text-lg md:text-xl">Eventstruct</h1>
            <p className="text-sm md:text-base text-dark-gray mt-2 md:mt-0">
              UI/UX designer for Eventstruct, a digital platform to simplify event management.
            </p>
          </div>

          <p className="text-sm md:text-base  text-blue-600 text-right">UI/UX Design · Frontend Development</p>
        </div>
      </div>


      <div class="mb-32 md:mb-48">
        <Link to="https://hoanderful.com/" target="_blank" rel="noopener noreferrer" className="w-full flex flex-col group mb-48">
          <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
            <LazyImage
              src="/hoanderful.webp"
              alt="Hoanderful landing page"
              className="w-full md:w-5/6 mx-auto h-full object-contain transition-transform duration-300 "
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-12">
            <div>
              <h1 className="text-lg md:text-xl">Hoanderful</h1>
              <p className="text-sm md:text-base text-dark-gray mt-2 md:mt-0">
                Redesigned Hoanderful, introducing improved UI/UX to enhance overall user experience.
              </p>
            </div>

            <p className="text-sm md:text-base  text-blue-600 ">UI/UX Design </p>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Featured;
