import Image from "next/image";
import React from "react";

function SkillCard(skillItem) {
  return (
    <div
      className="p-5 rounded-md dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark flex flex-col md:flex-row space-y-2 space-x-2 md:space-x-4 items-center"
      data-aos="fade-up"
      title={skillItem.name}
    >
      <div className="relative h-24 md:h-36 w-24 md:w-36">
        <Image
          src={skillItem.Image}
          layout="fill"
          object="cover"
          alt=""
          className="rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 md:h-[25rem] md:w-[25rem]"
        />
      </div>
    </div>
  );
}

export default SkillCard;
