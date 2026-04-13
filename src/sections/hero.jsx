import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* <!-- Mobile Menu Overlay --> */}
      <div
        id="mobileMenu"
        class="fixed inset-0 bg-white z-50 hidden flex-col px-6 py-8"
      >
        <div class="flex justify-between items-center mb-12">
          <p class="font-medium">Menu</p>
          <button onclick="toggleMenu()" aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul class="space-y-8 text-2xl">
          <li>
            <a href="projects.html">Featured Works</a>
          </li>
          <li>
            <a href="services.html">Solutions</a>
          </li>
          <li>
            <a href="about.html">Story</a>
          </li>
          <li>
            <a href="contact.html">Reach Out</a>
          </li>
        </ul>
      </div>
      {/* <!-- Hero Section --> */}
      <section class="flex mt-24 lg:mt-48 justify-start">
        <div class="">
          <motion.h1
            id="about"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0 }}
            className="text-base mb-4 text-black/60 "
          >
            Hey there,
          </motion.h1>

          <motion.p
            id="about"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-lg md:text-2xl leading-relaxed max-w-4xl "
          >
            Nice to meet you, I'm Miguel. I enjoy UI design, coding, and
            building user-centered digital experiences. Feel free to explore my
            portfolio and get in touch!
          </motion.p>
        </div>
      </section>
      {/* <!-- Main Section --> */}
      <main class="mt-24 lg:mt-48">
        <div class="">
          <h1
            class="text-base mb-8 pb-4 border-b border-gray-200"
            id="projects"
          >
            Featured Works
          </h1>
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
        </div>
      </main>

      {/* for link */}
      {/* <div id="testimonials hidden"></div> */}
    </>
  );
}
