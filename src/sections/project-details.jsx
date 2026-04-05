import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiExpo,
  SiFirebase,
} from "react-icons/si";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const techIcons = {
    "React Native": <SiReact />,
    React: <SiReact />,
    Expo: <SiExpo />,
    "Node.js": <SiNodedotjs />,
    Express: <SiExpress />,
    MySQL: <SiMysql />,
    Tailwind: <SiTailwindcss />,
    Firebase: <SiFirebase />,
  };

  // START AT THE TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <div className="h-dvh flex justify-center flex-col gap-8 items-center ">
        <div className=" flex justify-start flex-col items-center gap-32">
          <p className="text-lg lg:text-xl">
            This project is currently in progress. Coming soon.
          </p>
        </div>
        <Link to="/" className="text-lg lg:text-lg text-dark-gray">
          Go back to homepage
        </Link>
      </div>
    );

  //   SPLIT DESCRIPTION INTO TWO
  const text = project.long_description;
  const midChar = Math.floor(text.length / 2);
  const splitIndex = text.lastIndexOf(" ", midChar);
  const firstHalf = text.slice(0, splitIndex);
  const secondHalf = text.slice(splitIndex + 1);

  return (
    <div className="flex flex-col gap-16">
      {/* TITLE */}
      <div className="flex  mt-24 lg:mt-32">
        <div className="flex flex-row justify-between items-baseline  w-full ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-medium leading-snug w-full flex flex-col items-start ">
              {project.title}
              {id === "2" && (
                <a href="https://hakban.vercel.app" target="_blank" className="text-blue-400 text-sm">Visit site</a>
              )}
            </h1>

            <p className="text-lg text-dark-gray w-full lg:max-w-5/6">
              {project.description}
            </p>
          </div>

          <p className="text-lg sm:text-lg lg:text-xl text-dark-gray">
            {project.year}
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full aspect-[16/9] cursor-pointer">
        {/* Colored shadow overlay behind the image */}
        <div
          className="absolute inset-0 blur-xl"
          style={{ backgroundColor: project.shadowColor }}
        ></div>

        {/* Image on top with blur animation */}
        {id === "2" ? (
          <video
            src="/vid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover relative z-10"
          />
        ) : (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover relative z-10"
            initial={{ filter: "blur(40px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          />
        )}
      </div>

      {/* Long description */}
      <div>
        <div className="text-lg lg:text-xl leading-12">{firstHalf}</div>

        <div className="text-lg lg:text-xl leading-12 text-dark-gray">
          {secondHalf}
        </div>
      </div>

      {/* Onboarding Flow */}
      <div>
        <div className={id === "2" ? "grid grid-cols-1" : "grid grid-cols-1 md:grid-cols-3"}>
          {project.screenshots.onboarding.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg ${id === "2" ? "aspect-[16/9]" : "aspect-[9/19.5]"}`}
            >
              <img
                src={img}
                alt={`Onboarding ${i + 1}`}
                className={`w-full h-full ${id === "2" ? "object-contain" : "object-cover"}`}
              />
            </div>
          ))}
        </div>

        <div className="text-lg lg:text-xl leading-loose">
          {project.onboardingText}
        </div>
        <div className="text-lg lg:text-xl leading-loose text-dark-gray">
          {project.onboardingSubText}
        </div>
      </div>

      {/* Create  Flow */}
      <div>
        <div className={id === "2" ? "grid grid-cols-1" : "grid grid-cols-1 md:grid-cols-3"}>
          {project.screenshots.create.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg ${id === "2" ? "aspect-[16/9]" : "aspect-[9/19.5]"}`}
            >
              <img
                src={img}
                alt={`Create ${i + 1}`}
                className={`w-full h-full ${id === "2" ? "object-contain" : "object-cover"}`}
              />
            </div>
          ))}
        </div>

        <div className="text-lg lg:text-xl leading-loose">
          {project.createText}
        </div>
        <div className="text-lg lg:text-xl leading-loose text-dark-gray">
          {project.createSubText}
        </div>
      </div>

      {/* Detail */}
      <div className="mt-32">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full  overflow-hidden rounded-lg  transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={project.screenshots.detail[0]}
              alt="Detail"
              className={`w-full h-full ${id === "2" ? "object-contain" : "object-cover"}`}
            />
          </div>
          <div className="w-full">
            <div className="text-lg lg:text-xl leading-loose">
              {project.detail}
            </div>
            <div className="text-lg lg:text-xl leading-loose text-dark-gray">
              {project.detailSubText}
            </div>
          </div>
        </div>
      </div>

      {/* Itinera's Goal - only for project 1 */}
      {id === "1" && (
        <div className="flex flex-col   mt-32">
          <div className="text-lg lg:text-xl leading-loose">Itinera's Goal</div>
          <div className="space-y-8">
            <p className="text-lg lg:text-xl leading-loose text-dark-gray ">
              I often find travel planning overwhelming, jumping between maps,
              blogs, and notes just to build a simple itinerary, only to end up
              with generic plans that do not really match what I enjoy.
            </p>
            <p className="text-lg lg:text-xl leading-loose text-dark-gray">
              Since I am more drawn to meaningful, local experiences rather than
              packaged tours, it felt inefficient to spend hours planning without
              a personalized result.
            </p>
            <div>
              <p className="text-lg lg:text-xl leading-loose ">
                I saw two possible solutions to this problem:
              </p>
              <ul className="text-dark-gray text-lg lg:text-xl list-disc p-6 space-y-4">
                <li>Rely on generic travel packages and pre made itineraries.</li>
                <li>
                  Build a system that creates itineraries based on personal
                  preferences and local experiences.
                </li>
              </ul>
            </div>
            <p className="text-lg lg:text-xl leading-loose text-dark-gray ">
              Instead of settling for one size fits all plans, I chose the second
              option, designing an itinerary system focused on experiential
              tourism, where travelers receive personalized, dynamic plans that
              make trips more intentional, local, and memorable.
            </p>
          </div>
        </div>
      )}

      {/* Tech used */}
      <div className="flex flex-col   mt-32">
        <div className="text-lg lg:text-xl leading-loose">Tech Stack Used</div>
        <div className="text-lg lg:text-xl leading-loose text-dark-gray ">
          {project.techDescription}
        </div>
        <div className="flex gap-3 flex-wrap mt-8">
          {project.tech.map((techName, index) => (
            <div
              key={index}
              className="bg-white/10 flex items-center px-4 gap-2 rounded-2xl py-2 text-dark-gray"
            >
              <span className="text-lg">{techIcons[techName]}</span>
              <p className="text-sm text-dark-gray ">{techName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
