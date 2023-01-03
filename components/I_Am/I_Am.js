import React, { useEffect } from "react";
import { FaPaperclip, FaSearchLocation } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

function I_Am() {
  const socialMediaList = [
    {
      icon: BsGithub,
      link: "https://github.com/nayanrdeveloper",
    },
    {
      icon: BsLinkedin,
      link: "https://in.linkedin.com/in/nayanrdeveloper",
    },
    {
      icon: BsTwitter,
      link: "https://twitter.com/nayan_radadiya6",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="mt-2 md:mt-5 p-5 border-b border-black" id="i_am">
      <div className="flex flex-col-reverse  md:flex-row gap-4">
        <div>
          <div
            className="p-3 md:p-10 flex flex-col gap-3 shadow_1 rounded-md"
            data-aos="fade-right"
          >
            <div className="flex gap-2">
              <span className="text-white p-3 rounded-full bg-[#ff014f] w-10 h-10">
                <FiUser />
              </span>
              <h2 className="text-4xl text-white">
                Hi, I am<span className="text-[#ff014f]"> Nayan Radadiya</span>
              </h2>
            </div>

            <p className="text-[#c4cfde] text-2xl">
              I&apos;m a front-end developer. I have 2 years of Experience in front
              development. I have worked with Odoo ERP-fronted (Python ERP base
              framework) development.
              {/* 2+years experience Front-end &amp; Python(odoo) || JavaScript ||
              Preparation Blockchain Developer */}
            </p>
            <span className="flex gap-1 items-center text-[#c4cfde]">
              <BsFileText className="my-auto text-[#ff014f] text-2xl" />
              <span>Looking Jr.fronted developer role</span>
            </span>
            <span className="flex gap-1 text-[#c4cfde]">
              {" "}
              <MdOutlineLocationOn className="my-auto text-[#ff014f] text-2xl" />{" "}
              Ganga Bhuvan, sardat Nagar St.-1, Jasdan, Rajkot
            </span>
            <span className="flex gap-1 text-[#c4cfde]">
              {" "}
              <HiOutlineMail className="my-auto text-[#ff014f] text-2xl" />{" "}
              nayanrdeveloper@gmail.com
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div
              className="flex flex-col items-center justify-center mt-5 p-10 gap-2 shadow_1 rounded-md"
              data-aos="fade-left"
            >
              <h3>FIND WITH ME</h3>
              <div className="flex gap-3 items-center">
                {socialMediaList.map((socialLink, index) => {
                  return (
                    <Link key={index} href={socialLink.link}>
                      <div className="cursor-pointer p-4 shadow_1 rounded-md hover:slider-background hover:-translate-y-1 duration-300 hover:bg-[#18181a]">
                        <socialLink.icon className="text-3xl" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              className="flex flex-col w-full mt-5 p-10 shadow_1 rounded-md"
              data-aos="fade-right"
            >
              <p className="text-center">Download my curriculum vitae:</p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <Link
                  href={"/Nayan Radadiya Resume.pdf"}
                  target="_blank"
                  download
                >
                  <button className="p-4 shadow_1 rounded-md text-[#ff014f] hover:-translate-y-1 duration-300 hover:bg-[#18181a]">
                    Download CV
                  </button>
                </Link>
                <button className="p-4 shadow_1 rounded-md text-[#ff014f] hover:-translate-y-1 duration-300 hover:bg-[#18181a]">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="p-7 shadow_1 rounded-md" data-aos="fade-left">
          <Image
            src="/myImage.jpeg"
            alt=""
            height={460}
            width={500}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default I_Am;
