import React, { useState } from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [openNav, setOPenNav] = useState(true);
  return (
    <div className="sticky left-0 top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between px-3 md:px-10 py-5 relative z-10 bg-[#212428] shadow_1">
        <div className="">
          <NavLogo />
        </div>
        <div className="">
          <AiOutlineMenu
            className="md:hidden absolute right-2 top-8 text-2xl"
            onClick={() => setOPenNav(!openNav)}
          />
          <div className={`duration-300 mt-4 md:mt-0 ease-linear transition-all ${openNav ? '' : 'hidden'}`}>
            <NavItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
