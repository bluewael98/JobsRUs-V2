"use client";

import React from "react";
import UseMediaQuery from "@/components/UseMediaQuery";
import WeAreHiring from "@/components/WeAreHiring";
import { OurTeamData, OurTeamMobile } from "@/components/Data";
import Image from "next/image";
import Head from "next/head";
import EmployeeDirectory from "@/components/employee-directory";

interface OurTeamProps {
  companySlug?: string;
  companyName?: string;
}

const OurTeam = ({ companySlug = "jobsrus", companyName = "JobsRUs" }: OurTeamProps) => {

  const isLargeDevice = UseMediaQuery("(min-width: 1440px)");
  const isSmallDevice = UseMediaQuery("(max-width: 768px)");

  return (
    <section className="flex justify-center flex-col mt-[80px] items-center font-Oswald pb-10">
      <Head>
        <title>{companyName} Team</title>
        <meta name="description" content={`Meet the ${companyName} team.`} />
      </Head>
      <WeAreHiring />
      {isLargeDevice ? (
        <div className="w-screen bg-primary relative flex justify-between overflow-hidden mb-[5rem]">
          <div className="flex flex-col justify-center pl-10">
            <h1 className="xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4 text-lavender z-10">
              {companyName.toUpperCase()} TEAM
            </h1>
          </div>
          <div className="flex z-20 top-[25px] justify-center items-center shadow-5xl overflow-hidden w-[600px] ml-[100px] rounded-bl-[200px] pl-[25px] shadow--l5xl whitespace-pre bg-primary bg-opacity-80">
            <Image
              src="/group.webp"
              alt={`Photo representing the ${companyName} team`}
              className="w-[600px] object-cover object-top rounded-bl-[200px]"
              width={1740}
              height={1210}
            />
          </div>
          <img
            src="/circles.svg"
            alt="A circle SVG for design purposes"
            className="absolute w-screen min-h-[150px] object-cover opacity-30 z-[5]"
          />
        </div>
      ) : (
        <div className="w-screen xxs:max-h-[240px] xs:max-h-[500px] bg-primary relative flex justify-center items-center overflow-hidden py-20 mb-[5rem]">
          <div className="flex flex-col justify-center items-center text-center z-10 font-Bebas">
            <h1 className="xxs:text-3xl md:text-6xl font-extrabold font-Oswald bottom-4 text-lavender z-10">
              {companyName.toUpperCase()} TEAM
            </h1>
          </div>
          <img
            src="/circles.svg"
            alt="A circle svg for design purposes"
            className="absolute w-screen opacity-30 z-[5] xs:h-[300px] h-[240px] object-cover"
          />
        </div>
      )}

      {isSmallDevice ? (
        <div className="flex sm:px-20 md:px-[100px] xlg:px-[200px] xxs:flex-col xlg:flex-row gap-3 justify-center items-center w-full pt-10 mx-auto text-opacity-90">
          <div className="flex flex-col justify-center text-center gap-3">
            <div className="w-screen flex justify-center items-center px-10 flex-col">
              <h1 className="xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4 text-primary z-10">
                MEET {companyName.toUpperCase()}
              </h1>
              <Image
                src="/group.webp"
                alt={`Photo representing the ${companyName} team`}
                className="z-10 w-screen border-8 border-lavender rounded-[100px]"
                width={1740}
                height={1210}
              />
            </div>
            {OurTeamMobile.map((data, index) => (
              <div
                className="flex flex-col items-center justify-between relative"
                key={index}
              >
                <div className="flex justify-center items-center align-top w-[screen] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl flex flex-col gap-5 justify-center items-center font-Oswald rounded-2xl text-center">
                    <p className="max-w-screen">{data.message}</p>
                    <Image
                      src={data.img}
                      alt={data.alt}
                      className="min-w-[100px] max-w-[200px]"
                      height={data.imageHeight}
                      width={data.imageWidth}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex xxs:p-10 sm:px-20 md:px-[100px] xlg:px-[200px] xxs:flex-col xlg:flex-row gap-3 justify-center items-center w-full pt-10">
          <div className="xlg:w-[70%] md:w-[100%] flex flex-col xxs:justify-center xxs:items-center xxs:text-center xlg:justify-start xlg:items-start xlg:text-left gap-2">
            <h1 className="md:text-5xl xxs:text-2xl font text-primary">
              Meet the <span className="font-semibold opacity-100 italic">{companyName}</span> team.
            </h1>
            {OurTeamData.map((data, index) => (
              <p className="text-lg text-alt2 text-semibold font-Oswald" key={index}>
                {data.message}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="mt-[100px] w-full max-w-[1440px] px-6 sm:px-12 md:px-[100px] xlg:px-[160px]">
        <EmployeeDirectory
          companySlug={companySlug}
          companyName={companyName}
          heading={`${companyName} Directory`}
          intro={`Browse the ${companyName} team and open any profile for a closer look at their experience, language support, and role within the service.`}
        />
      </div>
    </section>
  );
};

export default OurTeam;
