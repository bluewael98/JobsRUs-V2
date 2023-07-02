"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { sectionLeft, sectionRight, TheMessageData } from "./Data";
import Image from "next/image";

const TheMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className=" bg-primary text-center  text-lavender font-Oswald flex xlg:text-start xlg:flex-row flex-col justify-center items-center py-20 gap-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {" "}
        {TheMessageData.map((data, index) => (
          <div
            className=" xlg:mr-[300px] xlg:ml-[100px] flex flex-col items-center xlg:items-start"
            key={index}
          >
            <h1 className=" text-xl font-bold font-Oswald">WHAT WE DO.</h1>
            <h1 className=" text-3xl font-Oswald mt-2 xlg:max-w-[400px]">
              {data.title}
            </h1>
            <p className=" xlg:max-w-[300px] px-5 xlg:p-0 mt-5  ">
              {data.message}
            </p>
            <Link href="/contact">
              <button className=" shadow-md  bg-lavender text-primary font-bold   mt-5  rounded-lg py-2 px-4 flex justify-center items-center gap-3 hover:scale-105 transition duration-300">
                <p className=" font-Oswald text-lg">Contact Us Here</p>
                <Image
                  src="/arrow.svg"
                  alt=""
                  className="max-w-[25px]"
                  width={800}
                  height={800}
                />
              </button>
            </Link>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className=" xlg:mr-10 flex-col opacity-90  text-alt2 mt-5 items-center flex justify-center px-5 xlg:px-0 gap-5 "
      >
        {sectionLeft.map((data, index) => (
          <motion.div
            variants={variants}
            className=" shadow-md  bg-lavender w-full xlg:max-w-[400px] py-[2rem] px-[4rem] font-semibold rounded-2xl"
            key={index}
          >
            <p>{data.paragraph}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className=" xlg:mr-10 flex-col opacity-90 text-alt2 x-5 xlg:px-0 px-5 flex gap-5"
      >
        {sectionRight.map((data, index) => (
          <motion.div
            variants={variants}
            className="shadow-md bg-lavender w-full  xlg:max-w-[400px] py-[2rem] px-[4rem]  font-semibold rounded-2xl"
            key={index}
          >
            {data.paragraph}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TheMessage;
