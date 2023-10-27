"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import usePage from "/store/currPage.js";

const Page = () => {
  const { choose } = usePage();

  useEffect(() => {
    choose(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <h2 className="w-fit mx-auto text-5xl p-6 mb-10">
        Projetos Figma traduzidos para React:
      </h2>
      <div className="flex justify-center items-center w-full">
        <div>
          <Link href="https://bm-index.vercel.app/" target="_blank">
            <div className=" rounded-xl relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-125">
              <Image
                src="/images/BMI-fig.png"
                alt="BMI in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href="https://pass-generator-pied.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-125">
              <Image
                src="/images/password-fig.png"
                alt="Password generator in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div>
          <Link href="https://planets-zeta.vercel.app/" target="_blank">
            <div className="relative ml-10 w-80 h-80 transition-all duration-500 hover:scale-125">
              <Image
                src="/images/planets-fig.png"
                alt="Planets facts in Figma"
                fill
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
