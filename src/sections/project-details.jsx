import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

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
      <div className="flex items-baseline justify-between mt-32">
        <div className="flex flex-col gap-4 md:gap-2">
          <h1 className="text-3xl sm:text-4xl  font-medium leading-snug w-full">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray">
            {project.year}
          </p>
          <p className="text-lg text-gray">{project.description}</p>
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

      <div>
        <div className="text-lg sm:text-xl lg:text-2xl leading-loose">
          {firstHalf}
        </div>

        <div className="text-lg sm:text-xl lg:text-2xl leading-loose text-gray">
          {secondHalf}
        </div>
      </div>
    </div>
  );
}
