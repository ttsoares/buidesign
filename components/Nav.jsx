import React from "react";
import Link from "next/link";
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
    text: "Contato",
    link: "/contact",
  },
];

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto h-12 flex justify-end z-20">
      <div className="flex justify-between items-center w-full  rounded-xl my-2 mr-5">
        <Image
          className="ml-5"
          src="/images/logo.png"
          width={100}
          height={60}
          alt="Logo"
        />
        <div className="flex justify-around">
          {MENU.map((item, index) => (
            <Link href={item.link} key={index} className="mx-2">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
