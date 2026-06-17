import React from "react";
export default function About() {
  return (
    <>
      <div id="about"></div>
      <div className="mt-24 lg:mt-48 " >
        <h1 class="text-base mb-8 pb-4 border-b border-gray-200" >
          About Me
        </h1>
        <div className=" text-md md:text-xl leading-12">
          I'm a UI/UX Designer and Front-End Developer, currently building my
          skills through hands-on projects and constant learning. I enjoy creating
          clean, functional, and visually engaging UIs — focusing on simplicity,
          usability, and detail. <br />
        </div>

        <div className=" text-md md:text-xl leading-12 text-black/70">
          I enjoy breaking down designs I see online and figuring out what makes
          them work — then applying those ideas to my own projects.
        </div>
      </div>

      <div className="mt-24 lg:mt-48   " >
        <h1 class="text-base mb-8 pb-4 border-b border-gray-200" >
          Certifications and Eligibility
        </h1>
        <div className=" text-md md:text-xl leading-12">
          • <a className="underline" href="https://www.udemy.com/certificate/UC-13d5f67c-fb28-49fa-a64e-78a89f9ff857/" target="_blank" rel="noopener noreferrer">Figma UI UX Design Advanced (Udemy)</a>
        </div>

        <div className=" text-md md:text-xl leading-12">
          • <a className="underline" href="https://www.udemy.com/certificate/UC-b7c64ae5-3c21-448a-b62e-ba7e6f5ea9b5/" target="_blank" rel="noopener noreferrer">Complete UI/UX Design Course 2026: Figma + AI + Real Project (Udemy)</a>
        </div>

        <div className=" text-md md:text-xl leading-12">
          • <a className=""  >Civil Service Examination — Subprofessional Eligibility</a>
        </div>

      </div>

    </>
  );
}
