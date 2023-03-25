import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiTime } from "react-icons/bi";

function BlogCard(blogItem) {
  return (
    <div className="group">
      <div className="p-8 dark:shadow-dark shadow-light bg-light-gradient dark:bg-dark rounded-2xl space-y-4 dark:group-hover:bg-light duration-300 transition transform ease-out">
        <div className="relative h-52 w-full">
          <Image
            src={"/saurashtra_university.jpeg"}
            alt={"blog data"}
            layout="fill"
            className="rounded-2xl group-hover:-translate-y-1 group-hover:scale-110 duration-700"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-[#ff014f]">{blogItem.category}</span>
          <span className="flex items-center space-x-2 text-[#3c3e41] dark:text-[#c4cfde]">
            <BiTime />
            <span>4 min read</span>
          </span>
        </div>
        <Link href={"/"}>
          <h4 className="text-[#1e2125] dark:text-[#c4cfde] cursor-pointer text-2xl font-semibold transition group-hover:text-[#ff014f] dark:group-hover:text-[#ff014f] transform duration-300 ease-out">
            {blogItem.title}
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
