import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GithubSection from "../components/github";
import Socials from "../components/socials";
import Techstack from "../components/techstack";
import { GoStack } from "react-icons/go";
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
          <h1 class="text-base mb-4 text-black/60">Hey there,</h1>
          <p class="text-lg md:text-2xl leading-relaxed max-w-4xl">
            Nice to meet you, I'm Miguel. I enjoy UI design, coding, and
            building user-centered digital experiences. Feel free to explore my
            portfolio and get in touch!
          </p>
        </div>
      </section>
      {/* <!-- Main Section --> */}
      <main class="mt-24 lg:mt-48">
        <div class="">
          <h1 class="text-base mb-8 pb-4 border-b border-gray-200" id="projects">
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

              <p id="others" className="text-base md:text-xl text-gray">2026</p>
            </div>
          </Link>
        </div>
      </main>

      <div className="mt-24 lg:mt-48 flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full gap-4">
          <Socials />
          {/* Github */}
          <div className="h-full min-h-0">
            <GithubSection />
          </div>
        </div>

        {/* Tech stack */}
        <div className="border border-black/5 shadow-sm p-6 rounded-2xl w-auto flex flex-col gap-8 justify-between">
          {/* Header */}
          <div className="text-sm font-medium p-2 text-black/80 mb-4 flex gap-2 items-center w-fit">
            <GoStack size={20} />
            <p>Tech stack</p>
          </div>

          {/* Tech List */}
          <Techstack />

          <div className="space-y-2">
            <h1 className="text-lg">Technologies I've been using</h1>
            <p className="text-sm text-gray">
              {" "}
              Technologies and tools I use to build modern web and mobile
              applications.
            </p>
          </div>
        </div>
      </div>
      {/* for link */}
      <div id="testimonials"></div>
      {/* <!-- Testimonial Section --> */}
      <div className="mt-24 lg:mt-48">
        <h1 className="text-base mb-8 pb-4">
          Testimonials
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row gap-4 min-h-0">
          <div className="testimonial-card bg-gray-100  p-10  rounded-2xl  w-full flex flex-col gap-16">
            <p className="font-light leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              veniam quasi unde temporibus voluptatem molestias eos sed deleniti
              accusamus nesciunt, mollitia dolorum est sit cumque voluptatibus,
              inventore molestiae provident necessitatibus!
            </p>
            <div className="flex items-center gap-4">
              <div className="size-10 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray ">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card bg-dark-gray p-10 rounded-2xl w-full flex flex-col gap-16">
            <p className=" text-white font-light leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              veniam quasi unde temporibus voluptatem molestias eos sed deleniti
              accusamus nesciunt, mollitia dolorum est sit cumque voluptatibus,
              inventore molestiae provident necessitatibus!
            </p>
            <div className="flex items-center gap-4">
              <div className="size-10 bg-purple-500 rounded-full"></div>
              <div>
                <p className="font-medium text-white" id="story">John Diesto</p>
                <p className="text-sm text-white/60 ">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
