import React, { useState } from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

function Navbar() {
  const [openNav, setOPenNav] = useState(true);
  const { systemTheme, theme, setTheme } = useTheme();
  const updateTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <div className="sticky left-0 top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between px-3 md:px-10 py-5 relative z-10 bg-[#ECF0F3] dark:bg-[#212428] border-b border-[#dce1e4] dark:border-none dark:shadow_1">
        <div className="">
          <NavLogo />
        </div>
        <div className="">
          <div className="md:hidden absolute right-10 top-8 text-2xl dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark" onClick={updateTheme}>
            {theme == "light" ? (
              <MdOutlineDarkMode className="text-2xl" />
            ) : (
              <MdLightMode className="text-2xl" />
            )}
          </div>  
          <AiOutlineMenu
            className="md:hidden absolute right-2 top-8 text-2xl"
            onClick={() => setOPenNav(!openNav)}
          />
          <div
            className={`duration-300 mt-4 md:mt-0 ease-linear transition-all flex items-center ${
              openNav ? "" : "hidden"
            }`}
          >
            <div onClick={updateTheme} className="hidden md:block dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark p-2 rounded-md cursor-pointer">
              {theme == "light" ? (
                <MdOutlineDarkMode className="text-2xl" />
              ) : (
                <MdLightMode className="text-2xl" />
              )}
            </div>
            <NavItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
