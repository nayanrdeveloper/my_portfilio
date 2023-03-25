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
    <div className='p-5 rounded-md  flex flex-col md:flex-row space-y-2 space-x-2 md:space-x-4 dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark' data-aos="fade-up">
        <div className='relative h-44 md:h-44 w-full md:w-60'>
            <Image src={data.image} layout="fill" object="cover" alt="" className='rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 h-[30rem] w-[30rem]' />
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-white dark:text-[#c4cfde] p-2 bg-[#ff014f] dark:bg-[#545961] w-36 text-center h-10 rounded-lg'>{data.timePeriod}</p>
            <h4 className='text-3xl text-[#1e2125] dark:text-[#c4cfde]'>{data.title}</h4>
            <p className='text-[#3c3e41] dark:text-[#c4cfde]'>{data.companyName}</p>
        </div>
    </div>
  )
}

export default ExperienceCard