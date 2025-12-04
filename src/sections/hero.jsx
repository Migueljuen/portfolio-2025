import React from "react";
import background from "./src/assets/images/bg3.svg";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={background}
        alt=""
      />

      <section className="flex flex-col items-start justify-center h-dvh gap-8   pb-48 lg:pb-24 ">
        <motion.div
          id="hero"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="border border-white/20 flex items-center px-4 gap-2 rounded-2xl py-1"
        >
          <div className="relative flex items-center justify-center">
            {/* Ripple effect */}
            <div className="absolute size-3 bg-blue rounded-full animate-ping opacity-75"></div>
            {/* Main dot */}
            <div className="relative bg-blue size-3 rounded-full"></div>
          </div>
          <p className="text-sm text-white/80 font-medium">
            Available for work
          </p>
        </motion.div>

        {/* Name and address */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl  font-medium leading-snug"
        >
          Miguel Juen<br></br>Web Developer & UI Designer
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray text-lg"
        >
          Based in Bacolod - passionate in learning and building beautiful UI{" "}
          <br />
          mainly in the JavaScript ecosystem.
        </motion.div>
      </section>
    </>
  );
}
