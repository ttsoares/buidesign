"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MENU = [
  {
    text: "Início",
    link: "/",
  },
  {
    text: "Projetos",
    link: "/projects",
  },
  {
    text: "Encomenda",
    link: "/comission",
  },
  {
    text: "Sobre",
    link: "/about",
  },
  {
    text: "P&R",
    link: "/PR",
  },
  {
    text: "Contato",
    link: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gradient-to-r from-slate-600 to-slate-200">
      <div className="max-w-7xl mx-auto h-14 flex justify-end z-20 ">
        <div className="flex justify-between items-center w-full  rounded-xl my-2 mr-5">
          <Image
            className="ml-5 invert"
            src="/images/logo.png"
            width={100}
            height={60}
            alt="Logo"
          />
          <div className="flex justify-around">
            {MENU.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`mx-2 hover:animate-pulse hover:font-bold ${
                  pathname === item.link && "animate-bounce"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
