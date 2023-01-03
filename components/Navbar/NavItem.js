import Link from "next/link";
import React from "react";

function NavItem() {
  const navItemList = [
    {
      name: "I AM",
      link: "#i_am",
    },
    {
      name: "My Experience",
      link: "#my_experience",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
  ];
  return (
    <div className="flex">
      <ul className="flex flex-col md:flex-row">
        {navItemList.map((navItem, index) => {
          return (
            <Link key={index} href={navItem.link}>
              <li
                className="p-2 hover:text-[#FF0003] duration-300 transition transform hover:border-b ease-in text-[#878e99] cursor-pointer"
              >
                {navItem.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavItem;
