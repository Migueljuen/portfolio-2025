import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ArchiveBoxIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Dock from "./Dock";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
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

  const dockItems = [
    {
      icon: <HomeIcon style={{ width: 18, height: 18, color: "#fff" }} />,
      label: "Go to Top",
      onClick: () => scrollToSection("top"),
    },
    {
      icon: <ArchiveBoxIcon style={{ width: 18, height: 18, color: "#fff" }} />,
      label: "Featured Works",
      onClick: () => scrollToSection("featured"),
    },
    {
      icon: <DevicePhoneMobileIcon style={{ width: 18, height: 18, color: "#fff" }} />,
      label: "Mockups",
      onClick: () => scrollToSection("mockups"),
    },
    {
      icon: <CubeTransparentIcon style={{ width: 18, height: 18, color: "#fff" }} />,
      label: "Graphics",
      onClick: () => scrollToSection("graphics"),
    },
  ];

  return (
    <>
      {/* ── Desktop Header  ── */}
      <motion.div
        id="top"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }}
        className="flex justify-between gap-48 z-10 sticky top-0  bg-white w-full py-4">
        <div className="flex items-center justify-between w-full">
          <p

            className="text-lg tracking-tight flex flex-col "
          >
            <a className="">
              Miguel Juen
            </a>
            <a className="text-gray/50">
              Designer
            </a>
          </p>
          <p

            className="text-lg tracking-tight flex flex-col "
          >
            <a className="">
              Freelance Availability
            </a>
            <a h className="text-gray/50">
              Available
            </a>
          </p>
          <p
            className="text-lg tracking-tight flex flex-col"
          >
            <a className="">
              Designing at
            </a>
            <a href="https://giga.ai/" target="_blank" className="text-gray/50">
              Giga

            </a>
          </p>

        </div>
        <p
          className="flex gap-4 bg-[#120F17] items-center px-6 rounded-full transition-all duration-300 hover:bg-black/80 active:scale-95 "
        >
          <a href="#footer" className=" text-white/90 tracking-tight whitespace-nowrap font-semibold">Get in Touch</a>
        </p>
      </motion.div>

      {/* ── Floating Dock Nav ── */}
      <div className="fixed z-[9999999] bottom-6 left-1/2 -translate-x-1/2 ">
        <Dock
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          distance={150}
        />
      </div>
    </>
  );
}
