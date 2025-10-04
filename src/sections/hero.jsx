import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-start justify-center h-dvh gap-8 pb-24 ">
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
          className="text-5xl font-medium leading-snug"
        >
          Miguel Juen<br></br>Web Developer & UI Designer
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray text-base"
        >
          Based in Bacolod - passionate in learning and building beautiful
          websites <br />
          mainly in the JavaScript ecosystem.
        </motion.div>
      </section>
    </>
  );
}
