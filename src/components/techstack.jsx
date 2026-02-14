import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpo,
  SiReactrouter,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiNodedotjs,
} from "react-icons/si";

const techLogos = [
  // Frontend / Mobile
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiExpo />, title: "React Native / Expo", href: "https://expo.dev" },

  // Languages
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },

  // Styling
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },

  // Backend / APIs
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },

  // Database
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },

  // Tools
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
];

export default function Techstack() {
  return (
    <div className="" style={{ position: "relative", overflow: "hidden" }}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={50}
        gap={50}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
