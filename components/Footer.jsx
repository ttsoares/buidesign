import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-10 flex items-center justify-between w-full bg-gradient-to-r from-slate-600 to-slate-200 px-4">
      <Link
        href="/figma"
        className="text-[3px] p-2  text-black hover:animate-bounce hover:cursor-pointer"
      >
        Do Figma para para o fronEnd
      </Link>
      <p className="-ml-[6%]">CopyRight&copy; 2023</p>
      <Image src="/images/logo.png" alt="Logo" width={80} height={40} />
    </div>
  );
};

export default Footer;
