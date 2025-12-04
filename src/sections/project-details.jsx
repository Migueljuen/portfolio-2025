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

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

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

  //   SPLIT DESCRIPTION INTO TWO
  const text = project.long_description;
  const midChar = Math.floor(text.length / 2);
  const splitIndex = text.lastIndexOf(" ", midChar);
  const firstHalf = text.slice(0, splitIndex);
  const secondHalf = text.slice(splitIndex + 1);

  return (
    <div className="flex flex-col gap-16">
      {/* TITLE */}
      <div className="flex  mt-32">
        <div className="flex flex-row justify-between items-baseline  w-full ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-medium leading-snug w-full">
              {project.title}
            </h1>

            <p className="text-xl text-gray w-full lg:max-w-5/6">
              {project.description}
            </p>
          </div>

          <p className="text-xl sm:text-xl lg:text-2xl text-gray">
            {project.year}
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full aspect-[16/9] cursor-pointer">
        {/* Colored shadow overlay behind the image */}
        <div
          className="absolute inset-0 blur-3xl"
          style={{ backgroundColor: project.shadowColor }}
        ></div>

        {/* Image on top with blur animation */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover relative z-10"
          initial={{ filter: "blur(40px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        />
      </div>

      {/* Long description */}
      <div>
        <div className="text-xl lg:text-2xl leading-12">{firstHalf}</div>

        <div className="text-xl lg:text-2xl leading-12 text-gray">
          {secondHalf}
        </div>
      </div>

      {/* Onboarding Flow */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {project.screenshots.onboarding.map((img, i) => (
            <div
              key={i}
              className="aspect-[9/19.5] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Onboarding ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-xl lg:text-2xl leading-loose">
          {project.onboardingText}
        </div>
        <div className="text-xl lg:text-2xl leading-loose text-gray">
          {project.onboardingSubText}
        </div>
      </div>

      {/* Create  Flow */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {project.screenshots.create.map((img, i) => (
            <div
              key={i}
              className="aspect-[9/19.5] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Create ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-xl lg:text-2xl leading-loose">
          {project.createText}
        </div>
        <div className="text-xl lg:text-2xl leading-loose text-gray">
          {project.createSubText}
        </div>
      </div>

      {/* Detail */}
      <div className="mt-32">
        <div className="flex flex-col items-center gap-24">
          <div className="w-[36rem] sm:w-[48rem]  overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={project.screenshots.detail[0]}
              alt="Detail"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xl lg:text-2xl leading-loose">
              {project.detail}
            </div>
            <div className="text-xl lg:text-2xl leading-loose text-gray">
              {project.detailSubText}
            </div>
          </div>
        </div>
      </div>

      {/* Tech used */}
      <div className="flex flex-wrap gap-3">
        {project.tech.map((techName, index) => (
          <div
            key={index}
            className="bg-blue/5 flex items-center px-4 gap-2 rounded-2xl py-2 text-blue"
          >
            <span className="text-lg">{techIcons[techName]}</span>
            <p className="text-sm text-blue font-medium">{techName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
