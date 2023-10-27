"use client";

import React, { useEffect } from "react";

import usePage from "/store/currPage.js";

const Page = () => {
  const { choose } = usePage();

  useEffect(() => {
    choose(5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>contact</div>;
};

export default Page;
