import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

function NavLogo() {
  const { systemTheme, theme, setTheme } = useTheme();
  const updateTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div>
      <Link href={"/"}>
        <div className="flex gap-x-2 cursor-pointer items-center">
          <Image
            src="/myImage.jpeg"
            height={50}
            width={50}
            alt="my"
            className="rounded-full"
          />
          <h1 className="text-lg md:text-3xl my-auto text-[#575A5E] dark:text-[#c4cfde]">
            Nayan (Front-End developer)
          </h1>
          
        </div>
      </Link>
    </div>
  );
}

export default NavLogo;
