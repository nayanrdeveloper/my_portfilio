import React from 'react';
import { FaPaperclip, FaSearchLocation } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsFileText } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';
import Image from 'next/image';


function I_Am() {
  return (
    <div className='mt-5 p-5 border-b border-black'>
        <div className='flex gap-4'>
            <div>
                <div className='p-10 flex flex-col gap-3 shadow_1 rounded-md'>
                    <span className='text-white p-3 rounded-full bg-[#ff014f] w-10 h-10'><FiUser /></span>
                    <h2 className='text-4xl text-white'>Hi, I am<span className='text-[#ff014f]'> Nayan</span></h2>
                    <p className='text-[#c4cfde]'>  Web designer and developer working for envato.com in Paris, France.</p>
                    <span className='flex gap-1 text-[#c4cfde]'><BsFileText  className='my-auto text-[#ff014f]'/>Web Designer and Developer</span>
                    <span className='flex gap-1 text-[#c4cfde]'> <MdOutlineLocationOn className='my-auto text-[#ff014f]' /> Ganga Bhuvan, sardat Nagar St.-1, Jasdan, Rajkot</span>
                    <span className='flex gap-1 text-[#c4cfde]'> <HiOutlineMail className='my-auto text-[#ff014f]' /> nayanrdeveloper@gmail.com</span>
                </div>
                <div className='flex flex-col mt-5 p-10 shadow_1 rounded-md'>
                   <p>Download my curriculum vitae:</p>
                   <div className='flex gap-3 mt-5'>
                        <button className='p-4 shadow_1 rounded-md text-[#ff014f]'>Download CV</button>
                        <button className='p-4 shadow_1 rounded-md text-[#ff014f]'>Contact Me</button>
                   </div>
                </div>
            <div>
        </div>

            </div>
            <div className='p-7 shadow_1 rounded-md'>
                <Image src="/myImage.jpeg" alt="" height={460} width={500} className="rounded-md" />
            </div>
        </div>
    </div>
  )
}

export default I_Am