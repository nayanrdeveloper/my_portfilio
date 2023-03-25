import React from "react";
import ExperienceCard from "./ExperienceCard";

function MyExpereince() {
  const experienceList = [
    {
      title: "Fronted Developer (React and Next.js)",
      timePeriod: "2022- Present",
      image: "/experience-image-01.jpg",
      companyName: "React Web Solution",
    },
    {
      title: "Fronted Developer | Python (Odoo ERP)",
      timePeriod: "2020-2022",
      image: "/experience-image-01.jpg",
      companyName: "eGrivory Technologies",
    },
  ];
  return (
    <div className="mt-10 p-5 flex flex-col gap-4 md:mx-12" id="my_experience">
      <p className="text-center text-[#ff014f]">OVER 2.5 YEARS OF EXPERIENCE</p>
      <h3 className="text-center text-5xl text-[#3c3e41] dark:text-[#c4cfde]">My Experience</h3>
      <div className="mt-5 flex flex-col gap-8">
        {experienceList.map((experience, index) => {
          return <ExperienceCard key={index} data={experience} />;
        })}
      </div>
    </div>
  );
}

export default MyExpereince;
