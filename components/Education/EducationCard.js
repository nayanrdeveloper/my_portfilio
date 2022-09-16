import Image from "next/image";
import Link from "next/link";
import React from "react";

function EducationCard({ data }) {
  return (
    <div className="py-8 px-8 rounded-md shadow_1 flex gap-10 justify-between">
      <div className="flex gap-5">
        <div>
          <Image
            src={data.image}
            width={250}
            height={150}
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#c4cfde] p-2 bg-[#545961] w-24 h-10 rounded-lg">
            {data.timePeriod}
          </p>
          <h4 className="text-3xl text-[#c4cfde]">{data.degreeName}</h4>
          <p>{data.universityName}</p>
          <p>{data.collegeAddress}</p>
        </div>
      </div>
      <div className="my-auto">
        <Link target={"_parent"} href={data.collegeContact}><button className="p-4 shadow_1 rounded-md text-[#ff014f]">Admission</button></Link>
      </div>
    </div>
  );
}

export default EducationCard;
