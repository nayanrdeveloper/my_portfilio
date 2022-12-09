import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function EducationCard({ data }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="py-8 px-3 md:px-8 rounded-md shadow_1 flex flex-col md:flex-row gap-10 justify-between" data-aos="fade-up">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <Image
            src={data.image}
            width={250}
            height={150}
            alt=""
            className="rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
        <Link target={"_parent"} href={data.collegeContact}><button className="p-4 shadow_1 rounded-md text-[#ff014f] hover:slider-background hover:-translate-y-1 duration-300 hover:bg-[#18181a]">Admission</button></Link>
      </div>
    </div>
  );
}

export default EducationCard;
