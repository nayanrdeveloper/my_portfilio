import React from "react";
import SkillCard from "./SkillCard";

function Skill() {
  const skillList = [
    {
      id: 1,
      name: "React.js",
      Image: "/icons/react.png",
    },
    {
      id: 2,
      name: "Next.js",
      Image: "/icons/nextjs.svg",
    },
    {
      id: 3,
      name: "Redux",
      Image: "/icons/redux.png",
    },
    {
      id: 4,
      name: "TypeScript",
      Image: "/icons/typescript.png",
    },
    {
      id: 5,
      name: "JavaScript",
      Image: "/icons/javascript.png",
    },
    {
      id: 6,
      name: "CSS3",
      Image: "/icons/css3.png",
    },
    {
      id: 7,
      name: "HTML5",
      Image: "/icons/html5.png",
    },
    {
      id: 8,
      name: "Tailwind CSS",
      Image: "/icons/tailwindcss-icon.svg",
    },
    {
      id: 9,
      name: "BootStrap",
      Image: "/icons/bootstrap.png",
    },
    {
      id: 10,
      name: "Node.js",
      Image: "/icons/nodejs.png",
    },
    {
      id: 11,
      name: "NPM",
      Image: "/icons/npm.png",
    },
    {
      id: 10,
      name: "Python",
      Image: "/icons/python.png",
    },
  ];
  return (
    <div className="mt-10 p-5 flex flex-col gap-4 md:mx-12" id="skills">
      <p className="text-center text-[#ff014f]">VISIT MY SKILL &#38; HIRE ME</p>
      <h3 className="text-center text-5xl text-[#3c3e41] dark:text-[#c4cfde]">My Skill</h3>
      <div className="mt-5 grid grid-cols-3 md:grid-cols-6 gap-x-5 gap-y-5">
        {skillList.map((skillItem) => {
          return <SkillCard key={skillItem.id} {...skillItem} />;
        })}
      </div>
    </div>
  );
}

export default Skill;
