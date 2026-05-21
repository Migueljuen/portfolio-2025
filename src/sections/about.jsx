import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <div id="about"></div>
      <div className="mt-24 lg:mt-48 " >
        <h1 class="text-base mb-8 pb-4 border-b border-gray-200" >
          About Me
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className=" text-md md:text-xl leading-12"
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
          className=" text-md md:text-xl leading-12 text-black/70"
        >
          I enjoy breaking down designs I see online and figuring out what makes
          them work — then applying those ideas to my own projects.
        </motion.div>
      </div>

      <div className="mt-24 lg:mt-48   " >
        <h1 class="text-base mb-8 pb-4 border-b border-gray-200" >
          Certifications and Eligibility
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
          className=" text-md md:text-xl leading-12"
        >
          • <a className="underline" href="https://www.udemy.com/certificate/UC-13d5f67c-fb28-49fa-a64e-78a89f9ff857/" target="_blank" rel="noopener noreferrer">Figma UI UX Design Advanced (Udemy)</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className=" text-md md:text-xl leading-12"
        >
          • <a className="underline" href="https://www.udemy.com/certificate/UC-b7c64ae5-3c21-448a-b62e-ba7e6f5ea9b5/" target="_blank" rel="noopener noreferrer">Complete UI/UX Design Course 2026: Figma + AI + Real Project (Udemy)</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className=" text-md md:text-xl leading-12"
        >
          • <a className=""  >Civil Service Examination — Subprofessional Eligibility</a>
        </motion.div>

      </div>

    </>
  );
}
