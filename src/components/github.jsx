import { div } from "framer-motion/client";
import { GitHubCalendar } from "react-github-calendar";
import { SiGithub } from "react-icons/si";
import "react-activity-calendar/tooltips.css";
export default function GithubSection() {
  return (
    <div className="border border-black/5 shadow-xs p-6 rounded-2xl  w-full">
      <div className=" p-2  text-black/80 mb-4 flex gap-2 items-center w-fit ">
        <SiGithub size={20} />
        <p className="text-sm font-medium">Github activity</p>
      </div>
      <GitHubCalendar
        username="Migueljuen"
        blockSize={16}
        blockMargin={4}
        fontSize={12}
        showMonthLabels={false}
        colorScheme="light"
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
        tooltips={{
          activity: {
            text: (activity) =>
              `${activity.level} contributions on ${activity.date}`,
            placement: "right",
            offset: 6,
            hoverRestMs: 300,
            transitionStyles: {
              duration: 100,
              common: { fontFamily: "monospace" },
            },
            withArrow: true,
          },
        }}
      />
    </div>
  );
}
