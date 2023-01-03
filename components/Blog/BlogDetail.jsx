import Image from "next/image";
import React from "react";

function BlogDetail() {
  return (
    <div className="mt-10 mx-10">
      <div className="shadow_1 px-10 py-10">
        <div className="relative w-full h-[30rem]">
            <Image src={'/harivandana_College.png'} layout="fill" object="cover" alt="college" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BlogDetail;
