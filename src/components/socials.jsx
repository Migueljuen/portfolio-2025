import React from "react";
import { SiGithub, SiFigma, SiBehance } from "react-icons/si";
import { GoChevronRight, GoQuote } from "react-icons/go";
export default function Socials() {
  return (
    <div className="w-full h-full flex flex-col gap-4 min-h-0">
      <section className="flex w-full gap-4">
        <div className="group  hover:border-black/10 transition h-24 sm:h-42 border border-black/5 shadow-sm p-6 rounded-2xl w-full flex items-center justify-center">
          <a
            href="https://github.com/Migueljuen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="size-8 sm:size-12 group-hover:text-cyan-500 transition" />
          </a>
        </div>
        <div className="group  hover:border-black/10 transition h-24 sm:h-42 border border-black/5 shadow-sm p-6 rounded-2xl w-full flex items-center justify-center">
          <a
            href="https://www.figma.com/@migueljuen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFigma className="size-8 sm:size-12 group-hover:text-cyan-500 transition" />
          </a>
        </div>
        <div className="group  hover:border-black/10 transition h-24 sm:h-42 border border-black/5 shadow-sm p-6 rounded-2xl w-full flex items-center justify-center">
          <a
            href="https://www.behance.net/migueljuen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiBehance className="size-8 sm:size-12 group-hover:text-cyan-500  transition" />
          </a>
        </div>
      </section>
      {/* See more */}

      <div className="group  hover:border-black/10 flex-1 border flex items-center justify-between border-black/5  shadow-sm p-6 rounded-2xl ">
        <p className="font-medium text-sm  whitespace-nowrap flex items-center gap-2">
          <GoQuote className="size-4 " />
          See testimonials
        </p>
        <a href="#testimonials">
          <GoChevronRight className="size-8 group-hover:rotate-90 transition" />
        </a>
      </div>
    </div>
  );
}
