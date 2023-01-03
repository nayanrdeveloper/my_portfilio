import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiTime } from "react-icons/bi";

function BlogCard(blogItem) {
  return (
    <div className="p-8 shadow_1 rounded-2xl space-y-4 hover:bg-[#18181a] duration-300 transition transform ease-out">
      <div className="relative h-52 w-full">
        <Image
          src={"/saurashtra_university.jpeg"}
          alt={"blog data"}
          layout="fill"
          className="rounded-2xl hover:-translate-y-1 hover:scale-110 duration-700"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[#ff014f]">{blogItem.category}</span>
        <span className="flex items-center space-x-2"><BiTime /><span>4 min read</span></span>
      </div>
      <Link href={'/'}>
        <h4 className="text-[#c4cfde] cursor-pointer text-2xl font-semibold transition hover:text-[#ff014f] transform duration-300 ease-out">
          {blogItem.title}
        </h4>
      </Link>
    </div>
  );
}

export default BlogCard;
