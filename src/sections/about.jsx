import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="pb-64">
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        className="text-2xl leading-loose"
      >
        I'm an aspiring frontend developer and UI designer, currently building
        my skills through hands-on projects and constant learning. I enjoy
        creating clean, functional, and visually engaging websites — focusing on
        simplicity, usability, and detail. <br />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="text-2xl leading-loose text-gray"
      >
        Outside of coding, I’m interested in gaming and fitness. When I’m not
        working on projects, you’ll usually find me exploring creative ideas,
        hitting the gym, or watching a good movie or series.
      </motion.div>
    </div>
  );
}
