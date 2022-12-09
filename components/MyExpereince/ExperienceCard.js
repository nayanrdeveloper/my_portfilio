import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExperienceCard({data}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className='p-5 rounded-md shadow_1 flex flex-col md:flex-row gap-10' data-aos="fade-up">
        <div>
            <Image src={data.image} width={250} height={150} alt="" className='rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 h-[30rem] w-[30rem]' />
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-[#c4cfde] p-2 bg-[#545961] w-24 h-10 rounded-lg'>{data.timePeriod}</p>
            <h4 className='text-3xl text-[#c4cfde]'>{data.title}</h4>
            <p>{data.companyName}</p>
        </div>
    </div>
  )
}

export default ExperienceCard