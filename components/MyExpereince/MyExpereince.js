import React from "react";
import ExperienceCard from "./ExperienceCard";

function MyExpereince() {
  const experienceList = [
    {
      title: "Python (Odoo ERP) | Fronted Developer",
      timePeriod: "2015-2020",
      image: "/experience-image-01.jpg",
      companyName: "eGrivory Technologies",
    },
  ];
  return (
    <div className="mt-10 p-5 flex flex-col gap-4">
      <p className="text-center text-[#ff014f]">OVER 2.5 YEARS OF EXPERIENCE</p>
      <h3 className="text-center text-5xl">My Experience</h3>
      <div className="mt-5 flex flex-col gap-8">
        {experienceList.map((experience, index) => {
          return <ExperienceCard key={index} data={experience} />;
        })}
      </div>
    </div>
  );
}

export default MyExpereince;
