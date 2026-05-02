import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="mt-24 lg:mt-48 ">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        className=" text-lg md:text-2xl leading-12"
      >
        I'm a UI/UX Designer and Front-End Developer, currently building my
        skills through hands-on projects and constant learning. I enjoy creating
        clean, functional, and visually engaging UIs — focusing on simplicity,
        usability, and detail. <br />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className=" text-lg md:text-2xl leading-12 text-black/60"
      >
        I enjoy breaking down designs I see online and figuring out what makes
        them work — then applying those ideas to my own projects.
      </motion.div>
    </div>
  );
}
