import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpIcon,
  StarIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
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
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* ── Desktop Header  ── */}
      <header className="flex justify-between z-10 sticky top-0 bg-white py-4">
        <motion.p
          id="top"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }}
          className="text-lg"
        >
          <a href="#" className="">
            Miguel Juen
          </a>
        </motion.p>
        <div>
          <nav>
            <ul className="space-x-8 hidden md:flex">
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <a href="#featured">Featured Works</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                  delay: 0.3,
                }}
              >
                <a href="#mockups">Mockups</a>
              </motion.li>
              {/* <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                  delay: 0.4,
                }}
              >
                <a href="#graphics">Graphics</a>
              </motion.li> */}
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                  delay: 0.4,
                }}
              >
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.8,
                  delay: 0.5,
                }}
              >
                <a href="#footer">Reach Out</a>
              </motion.li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Mobile Floating Nav ── */}
      <nav
        className={`md:hidden fixed z-50 rounded-full border border-black/10 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        flex items-center justify-between transition-transform duration-300 will-change-transform
        bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] px-6 py-3
        ${isVisible ? "translate-y-0" : "translate-y-24"}`}
      >
        <button
          onClick={() => scrollToSection("top")}
          className="p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 text-black/70 hover:text-black"
        >
          <ArrowUpIcon className="size-5" />
        </button>

        <button
          onClick={() => scrollToSection("featured")}
          className="p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 text-black/70 hover:text-black"
        >
          <StarIcon className="size-5" />
        </button>

        <button
          onClick={() => scrollToSection("mockups")}
          className="p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 text-black/70 hover:text-black"
        >
          <DevicePhoneMobileIcon className="size-5" />
        </button>

        {/* <button
          onClick={() => scrollToSection("graphics")}
          className="p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 text-black/70 hover:text-black"
        >
          <PaintBrushIcon className="size-5" />
        </button> */}

        <button
          onClick={() => scrollToSection("footer")}
          className="p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 text-black/70 hover:text-black"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="size-5" />
        </button>
      </nav>
    </>
  );
}
