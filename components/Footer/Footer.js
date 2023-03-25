import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

function Footer() {
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
  return (
    <div className="mt-5 py-5 px-5 md:px-10 border-t border-black flex flex-col md:flex-row justify-between items-center">
      <div className="text-[#878e99]">
        <p className="text-2xl text-[#3c3e41] dark:text-[#878e99]">
          © 2022. All rights reserved by <span className="text-[#ff014f]">Nayan Radadiya</span>
        </p>
      </div>
      <div className="flex gap-3 items-center mt-3 md:mt-0">
        {socialMediaList.map((socialLink, index) => {
          return (
            <Link key={index} href={socialLink.link}>
              <div className="group cursor-pointer p-4 dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark rounded-md hover:slider-background hover:-translate-y-1 duration-300 hover:bg-box-gradient dark:hover:bg-[#18181a]">
                <socialLink.icon className="text-3xl group-hover:text-white dark:group-hover:text-[#ff014f]" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
