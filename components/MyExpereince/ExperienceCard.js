import Image from 'next/image'
import React from 'react'

function ExperienceCard({data}) {
  return (
    <div className='p-5 rounded-md shadow_1 flex gap-10'>
        <div>
            <Image src={data.image} width={250} height={150} alt="" className='rounded-md' />
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