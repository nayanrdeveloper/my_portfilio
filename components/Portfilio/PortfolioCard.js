import Image from 'next/image'
import React from 'react'

function PortfolioCard({data}) {
  return (
    <div className='p-8 rounded-md shadow_1 flex flex-col gap-2 transition-all ease-in-out  hover:bg-[#18181a]'>
        <Image src={data.image} alt="" height={250} width={250} className="rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700" />
        <span className='text-[#ff014f]'>Gallery</span>
        <h4 className='text-[#c4cfde] text-2xl hover:text-[#ff014f] cursor-pointer'>{data.projectTitle}</h4>
    </div>
  )
}

export default PortfolioCard