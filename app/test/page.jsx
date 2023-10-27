import React from "react";

import Image from "next/image";

const Page = () => {
  return (
    <>
      <blockquote className="text-2xl font-semibold italic text-center text-slate-200 flex mt-20 ml-10">
        <p className="mr-2">When you look</p>
        <span className="relative">
          <span className="block border-2 border-white absolute -inset-1 -skew-y-3 bg-pink-500"></span>
          <span className="relative text-white">annoyed</span>
        </span>
        <p className="ml-2">
          all the time, people think that you&apos;re busy.
        </p>
      </blockquote>
      <div className="m-5 h-1 w-full bg-white"></div>
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <Image
            className="h-16 w-16 object-cover rounded-full"
            width={20}
            height={20}
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </label>
      </form>
    </>
  );
};

export default Page;
