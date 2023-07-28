import TagCloud from "TagCloud";
import { useEffect } from "react";

const TagCloudSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "MobX",
      "Toolkit",
      "Next",
      "Nest js",
      "Loadash",
      "Prisma",
      "Node JS",
      "Express",
      "Sqlite3",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "Figma",
      "Intersection Observer",
      "AG Grid",
      "Chart js",
      "Photoshop",
      "Docker",
    ];
    const options = {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: false,
    };
    TagCloud(container, texts, options);
  }, []);

  return (
    <div
      className=" animate-toLeft animation-delay-500 opacity-0
        animate-opacity
        min-w-fit
        min-h-fit
        "
    >
      <span className="tagcloud text-cyan-400"></span>
    </div>
  );
};

export default TagCloudSphere;
