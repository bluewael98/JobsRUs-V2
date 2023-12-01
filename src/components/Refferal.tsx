"use client";
import React, { useState, useEffect } from "react";
import UseMediaQuery from "./UseMediaQuery";

const Referral = () => {
  const isSmallDevice = UseMediaQuery("(max-width: 650px)");
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPoitition = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPoitition >= pageHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };
  return (
    <div
      className={`w-screen bg-lavender h-[80px] bottom-0 z-[70] fixed align-middle  flex ${
        isBottom
          ? "opacity-0 transition duration-300"
          : "opacity-100 transition duration-300"
      }`}
      style={{ boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex justify-between w-full px-[8%] items-center align-middle">
        {isSmallDevice ? (
          ""
        ) : (
          <div className="fles justify-center md:w-[350px] xxs:w-[250px] ">
            <img src="/ndisreferral.png" alt="" />
          </div>
        )}

        <div className="flex  xxs:justify-between ss:justify-center gap-5   items-center xxs:w-full ss:w-auto  ">
          <p className=" font-Bebas md:text-xl text-primary ">Need Support?</p>
          <a href="https://6gitozn79lt.typeform.com/to/c6p2y0pE?typeform-source=jobsrus.com.au">
            <button className="bg-primary text-lavender font-Bebas md:text-xl py-2 px-4 rounded-full hover:scale-105 transition duration-300 shadow-md   ">
              Make A Refferal
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Referral;
