import Image from 'next/image'
import React from 'react'

function NavLogo() {
  return (
    <div className='flex gap-x-2'>
        <Image src="/myImage.jpeg" height={50} width={50} alt="my" className='rounded-full' />
        <h1 className='text-3xl my-auto text-[#c4cfde]'>Nayan</h1>
    </div>
  )
}

export default NavLogo