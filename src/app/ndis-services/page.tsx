"use client";
import React from "react";
import Services from "@/components/Services";
import { ServicesData } from "@/components/Data";
import { School, Badge, SensorOccupied, Diversity3 } from "@mui/icons-material";
import UseMediaQuery from "@/components/UseMediaQuery";
import ContactTransition from "@/components/ContactTransition";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Services",
  description:
    "View our transparent services and choose the right service to help you access your desired employment goals.",
};

const NDISServices = () => {
  const isLargeDevice = UseMediaQuery("(min-width: 1440px)");
  const isSmallDevice = UseMediaQuery("(max-width: 1090px)");

  return (
    <section className=" flex justify-center flex-col mt-[80px]  items-center overflow-hidden relative">
      {/* HEADER */}
      {isLargeDevice ? (
        <div className="w-screen  bg-primary relative flex justify-between overflow-hidden  mb-[5rem]">
          <div className="flex flex-col justify-center pl-10 ">
            <h1 className="  xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              Empowering clients,
            </h1>
            <h1 className="  xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              through Personalised programs.
            </h1>
            <Link
              href="/contact"
              className="py-[0.5rem] px-[0.5rem] w-[150px] rounded-lg font-bold text-primary ml-[500px] mt-[20px] bg-lavender hover:scale-105 transition duration-200 z-10 text-center"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex  z-20 top-[25px] justify-center items-center shadow-5xl overflow-hidden  w-[600px]  ml-[100px] rounded-bl-[200px] pl-[25px] shadow--l5xl  whitespace-pre   bg-primary bg-opacity-80 ">
            <img
              src="/about-us.jpg"
              alt=""
              className="w-[600px] object-cover object-top  rounded-bl-[200px]"
            />
          </div>
          <img
            src="/circles.svg"
            alt=""
            className="absolute w-screen opacity-30 z-[5]"
          />
        </div>
      ) : (
        <div className="w-screen xxs:max-h-[240px] xs:max-h-[500px]  bg-primary relative flex justify-center items-center overflow-hidden py-20  mb-[5rem]">
          <div className="flex flex-col justify-center items-center text-center z-10 font-Bebas">
            <h1 className="  xxs:text-3xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              Empowering clients,
            </h1>
            <h1 className="  xxs:text-3xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
              through personalized programs.
            </h1>
          </div>
          <img
            src="/circles.svg"
            alt=""
            className="absolute w-screen opacity-30 z-[5] xs:h-[300px] xxs:h-[240px] object-cover"
          />
        </div>
      )}

      {/* MAIN SECTION */}
      {isSmallDevice ? (
        <div className="font-Oswald flex flex-col items-center justify-center text-alt2 ">
          <div className="pb-[50px] flex flex-col justify-center items-center text-center ">
            <h1 className="text-2xl font-bold text-center font-Oswald text-primary px-5">
              WHAT DO WE OFFER AT JOBS <span className=" text-alt2 ">R</span>{" "}
              US?
            </h1>
            <div className=" text-lg  text-opacity-85  flex flex-col gap-6 px-10">
              <div className="flex flex-col justify-center items-center mt-5">
                <h1 className="text-2xl font-bold text-lavender">
                  SLES{" "}
                  <span className=" font-medium">
                    &#40;School Leavers Employment Support&#41;{" "}
                  </span>
                </h1>
                <p className="">
                  A 2 year program that provides the opportunity to zone on and
                  target key employability outcomes and gain direction.
                </p>
                <img
                  src="/jobfinding.svg"
                  alt=""
                  className="w-[75px] mb-10 mt-3"
                />
                <Services
                  title={ServicesData[0].title}
                  body={ServicesData[0].body
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  image={ServicesData[0].image}
                  logo={<School />}
                />
              </div>

              <div
                className="flex flex-col justify-center items-center
              "
              >
                <h1 className="text-2xl font-bold text-lavender">
                  Specialised Employment Assistance
                </h1>
                <p className="">
                  From SLES regardless of your transition you will have an
                  Employment specialist help tailor a capacity building program
                  for your continued supports in employment.
                </p>
                <img
                  src="/unique.svg"
                  alt=""
                  className="w-[70px] mb-10 mt-3 "
                />
                <Services
                  title={ServicesData[1].title}
                  body={ServicesData[1].body
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  image={ServicesData[1].image}
                  logo={<Badge />}
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-lavender">
                  Employment Support Officer
                </h1>
                <p className="">
                  A cost-effective way to help you follow through with the
                  employment specialist tailored program to achieve whatever
                  your employment goals are.
                </p>
                <img
                  src="/guidance.svg"
                  alt=""
                  className="w-[70px]  mb-10 mt-3"
                />
                <Services
                  title={ServicesData[2].title}
                  body={ServicesData[2].body
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  image={ServicesData[2].image}
                  logo={<SensorOccupied />}
                />
              </div>

              <div className="flex flex-col  items-center">
                <h1 className="text-2xl font-bold text-lavender">
                  Group Activities
                </h1>
                <p className="">
                  Can’t be all work and no play, we have our leisure days on
                  Saturday’s fortnightly so you can unwind from your capacity
                  building goals.
                </p>
                <img
                  src="/empowering.svg"
                  alt=""
                  className="w-[75px] mb-10 mt-3"
                />
                <Services
                  title={ServicesData[3].title}
                  body={ServicesData[3].body
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  image={ServicesData[3].image}
                  logo={<Diversity3 />}
                />
              </div>

              <div className="flex flex-col justify-center align-top items-center mt-1">
                <p>
                  Our supports are delivered as part of the NDIS ‘finding and
                  keeping a job’ and ‘Increased Social and Community
                  Participation’ category.
                </p>
                <img src="/ndis.svg" className="w-[100px]  " alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // DESKTOP
        <div className="font-Oswald flex flex-row text-alt2 mx-10 ">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-4xl font-Bebas text-primary font-bold">
              WHAT DO WE OFFER AT JOBS <span className=" text-alt2 ">R</span>{" "}
              US?
            </h1>
            {/* p1` */}
            <section className="flex flex-col items-center justify-center relative my-[50px]">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pr-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    SLES{" "}
                    <span className=" font-medium">
                      &#40;School Leavers Employment Support&#41;{" "}
                    </span>
                  </h1>
                  <p className="mr-10">
                    A 2 year program that provides the opportunity to zone on
                    and target key employability outcomes and gain direction.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                  <img src="/jobfinding.svg" alt="" className="w-[180px]" />
                </div>
              </div>
            </section>
            <Services
              title={ServicesData[0].title}
              body={ServicesData[0].body
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              image={ServicesData[0].image}
              logo={<School />}
            />
            <div className="flex justify-center items-center mt-10">
              <img src="/arrowdown.svg" alt="" className="w-[100px]" />
            </div>

            {/* p2 */}
            <section className="flex flex-col items-center justify-center relative my-[50px] ">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pl-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    Specialised Employment Assistance
                  </h1>
                  <p className="mr-10">
                    From SLES regardless of your transition you will have an
                    Employment Specialist help tailor a capacity building
                    program for your continued supports in employment.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                  <img src="/unique.svg" alt="" className="w-[180px]" />
                </div>
              </div>
            </section>
            <Services
              title={ServicesData[1].title}
              body={ServicesData[1].body
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              image={ServicesData[1].image}
              logo={<Badge />}
            />
            <div className="flex justify-center items-center mt-10">
              <img src="/arrowdown.svg" alt="" className="w-[100px]" />
            </div>
            {/* p3 */}
            <section className="flex flex-col items-center justify-center relative my-[50px]">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pr-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    Employment Support Officer
                  </h1>
                  <p className="mr-10">
                    A cost-effective way to help you follow through with the
                    Employment Specialist tailored program to achieve whatever
                    your employment goals are.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                  <img src="/guidance.svg" alt="" className="w-[200px]" />
                </div>
              </div>
            </section>
            <Services
              title={ServicesData[2].title}
              body={ServicesData[2].body
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              image={ServicesData[2].image}
              logo={<SensorOccupied />}
            />
            <div className="flex justify-center items-center mt-10">
              <img src="/arrowdown.svg" alt="" className="w-[100px]" />
            </div>
            {/* p4 */}
            <div className="flex flex-col items-center justify-center relative my-[50px]">
              <div className="flex justify-center align-top w-[600px] relative">
                <div className="bg-primary text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl pl-[100px]">
                  <h1 className="text-2xl font-bold text-lavender">
                    Group Activities
                  </h1>
                  <p className="mr-10">
                    Can’t be all work and no play, we have our leisure days on
                    Saturday’s fortnightly so you can unwind from your capacity
                    building goals.
                  </p>
                </div>
                <div className="bg-alt2 w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                  <img src="/empowering.svg" alt="" className="w-[200px]" />
                </div>
              </div>
            </div>
            <Services
              title={ServicesData[3].title}
              body={ServicesData[3].body
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              image={ServicesData[3].image}
              logo={<Diversity3 />}
            />

            <div className=" text-xl font-bold  text-opacity-85  my-[50px] max-w-[660px] mx-[100px]">
              <div className="flex justify-center align-top items-center mt-1">
                <p>
                  Our supports are delivered as part of the NDIS ‘finding and
                  keeping a job’ and ‘Increased Social and Community
                  Participation’ category.
                </p>
                <img src="/ndis.svg" className="w-[100px] ml-[10px]  " alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      <ContactTransition />
    </section>
  );
};

export default NDISServices;
