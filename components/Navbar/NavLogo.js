import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavLogo() {
  return (
    <div>
      <Link href={'/'}>
      <div className="flex gap-x-2 cursor-pointer">
        <Image
          src="/myImage.jpeg"
          height={50}
          width={50}
          alt="my"
          className="rounded-full"
        />
        <h1 className="text-3xl my-auto text-[#c4cfde]">Nayan</h1>
      </div>
      </Link>
    </div>
  );
}

export default NavLogo;
