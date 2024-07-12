"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServicesContainer } from "@/components/Data";

export default function HeroSection() {
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
    <>
      {/* LANDING PAGE */}
      <div className="flex flex-col justify-center items-center py-10 font-Oswald font-semibold relative w-screen text-lavender  mb-[120px] bg-primary min-[1200px]:bg-lavender">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-center items-center  flex-col  font-Oswald font-extrabold mt-10 w-screen z-[9] "
        >
          {/* Logo */}
          <div className="flex flex-col justify-center items-center max-w-screen text-center">
            <img
              src="/jobsrus.png"
              alt="jobsrus"
              className="w-[200px] opacity-100 h-full  object-cover"
            />
            <h2 className=" font-Bebas font-extrabold text-6xl text-lavender">
              JOBS R US
            </h2>
          </div>

          <h2 className=" md:text-3xl xs:text-2xl font-Oswald">Your Goal,</h2>
          <h2 className=" md:text-3xl xs:text-2xl font-Oswald">Our Target.</h2>
          <Link href="/contact">
            <button className="  rounded-lg items-center  flex justify-center md:py-4 md:px-10 py-2 px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary my-5 shadow-lg ">
              GET IN TOUCH
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="items-center justify-center w-3/4  gap-10 z-[10] min-[1200px]:flex hidden  "
        >
          {ServicesContainer.map((data, index) => (
            <motion.div variants={variants} key={index}>
              <Link href={data.href} className="z-10">
                <div
                  className={`overflow-hidden cursor-pointer  flex justify-center items-centr w-full z-10 xlg:border-8 border-lavender border-opacity-40 bg-lavender rounded-[20%] shadow-md hover:scale-105 transition duration-300 ${data.margin}  max-h-[250px]`}
                >
                  <div className="bg-black  overflow-hidden rounded-[20%] relative flex justify-center items-center">
                    <Image
                      src={data.img}
                      alt=""
                      className="w-screen  object-cover object-top opacity-60 z-[5]"
                      height={data.imageHeight}
                      width={data.imageWidth}
                    />
                    <div className=" xxl:text-3xl md:text-2xl font-Oswald text-center text-lavender opacity-90 z-10 absolute p-0 m-0">
                      <p>{data.text}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-screen h-3/4 absolute  top-0 opacity-100  z-[5] bg-primary overflow-hidden  ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative"
          >
            <img
              src="/p1.png"
              alt=""
              className="absolute w-[930px]  pt-5 z-[7] min-[1200px]:flex hidden"
            />
            <img
              src="/circles.svg"
              alt=""
              className=" w-screen h-screen object-cover  z-[6] opacity-30 mix-blend-darker "
            />
          </motion.div>
          <img src="/p1mobile.webp" alt="p1 mobile" className="z-[10]" />
        </div>

        <img
          src="/jobsrus.png"
          alt=""
          className="absolute w-[900px] translate-x-0 top-0 mx-auto  z-[6] opacity-5 mix-blend-darker"
        />
      </div>
    </>
  );
}
