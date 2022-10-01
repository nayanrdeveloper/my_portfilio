import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioCard({data}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className='p-8 rounded-md shadow_1 flex flex-col gap-2  duration-300 hover:bg-[#18181a]' >
        <Image src={data.images[0].image_link} alt="" height={250} width={250} className="rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700" />
        <span className='text-[#ff014f]'>Gallery</span>
        <Link href={`/portfolio/${data._id}`}><h4 className='text-[#c4cfde] text-2xl hover:text-[#ff014f] cursor-pointer duration-300'>{data.title}</h4></Link>
    </div>
  )
}

export default PortfolioCard