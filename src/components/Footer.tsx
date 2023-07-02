"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen bottom-0  bg-primary text-lavender z-[60]  cursor-pointer py-10 gap-10">
      <div className="flex justify-center gap-10">
        <div className="flex flex-col justify-center item-center content-center text-center">
          <img src="/jobsrus.png" alt="" className=" w-[100px]" />
        </div>
        <div className="flex justify-start  flex-col  gap-5 font-Bebas ">
          <Link
            href="/about"
            onClick={handleClick}
            className="hover:underline-offset-1 hover:underline "
          >
            About US
          </Link>
          <Link
            href="ndis-services"
            onClick={handleClick}
            className="hover:underline-offset-1 hover:underline "
          >
            NDIS Services
          </Link>
        </div>

        <div className="flex justify-start  flex-col  gap-5 font-Bebas ">
          <Link
            href="/our-team"
            onClick={handleClick}
            className="hover:underline-offset-1 hover:underline "
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            onClick={handleClick}
            className="hover:underline-offset-1 hover:underline "
          >
            Contact
          </Link>
        </div>
      </div>
      <p>Copyright © 2023 JobsRUs</p>
    </div>
  );
};

export default Footer;
