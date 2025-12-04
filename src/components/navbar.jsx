import React, { useState, useEffect } from "react";
import {
  ArrowUpLeftIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <nav
      className={`fixed z-10 rounded-3xl border border-white/10 bg-black flex items-center justify-between transition-transform duration-300
        bottom-4 left-1/2 -translate-x-1/2 w-64 h-14 px-4 flex-row
        lg:top-1/2 lg:-translate-y-1/2 lg:right-10 lg:left-auto lg:translate-x-0 lg:bottom-auto lg:h-60 lg:w-14 lg:flex-col lg:py-4 lg:px-0
        ${
          isVisible
            ? "translate-y-0 lg:translate-y-[-50%] lg:translate-x-0"
            : "translate-y-28 lg:translate-y-[-50%] lg:translate-x-28"
        }`}
    >
      {/* Move to the beginning of the page */}
      <div className="relative group">
        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer p-2 rounded-xl transition-all duration-300 hover:scale-125"
        >
          <ArrowUpLeftIcon className="size-5" />
        </button>
        <span className="text-white/80 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 lg:right-full lg:mr-6 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 lg:bottom-auto lg:mb-0 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Back to Top
        </span>
      </div>

      {/* About me */}
      <div className="relative group">
        <button
          onClick={() => scrollToSection("about")}
          className="cursor-pointer p-2 rounded-xl transition-all duration-300 hover:scale-125"
        >
          <PuzzlePieceIcon className="size-5" />
        </button>
        <span className="text-white/80 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 lg:right-full lg:mr-6 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 lg:bottom-auto lg:mb-0 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          About Me
        </span>
      </div>

      {/* Projects */}
      <div className="relative group">
        <button
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer p-2 rounded-xl transition-all duration-300 hover:scale-125"
        >
          <GlobeAltIcon className="size-5" />
        </button>
        <span className="text-white/80 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 lg:right-full lg:mr-6 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 lg:bottom-auto lg:mb-0 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Projects
        </span>
      </div>

      {/* Contact */}
      <div className="relative group">
        <button
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer p-2 rounded-xl transition-all duration-300 hover:scale-125"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="size-5" />
        </button>
        <span className="text-white/80 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 lg:right-full lg:mr-6 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 lg:bottom-auto lg:mb-0 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Reach out
        </span>
      </div>
    </nav>
  );
}
