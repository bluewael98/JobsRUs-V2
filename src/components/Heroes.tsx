import React from "react";
import Image from "next/image";
import { HeroesData } from "./Data";

const Heroes = () => {
  return (
    <section className="flex justify-center flex-col bg-lavender my-10 text-primary text-center">
      <div className="flex flex-col  items-center text-primary font-Oswald">
        <h1 className="sm:text-4xl text-3xl font-bold">
          WE BELIEVE OUR CLIENTS ARE HEROES
        </h1>
        <h2 className="sm:text-4xl text-2xl text-gray-500 ">
          SO WE TRY TO BE HEROES TOO, HERE’S WHAT THAT MEANS TO US
        </h2>
      </div>
      <div className="flex ss:flex-row flex-col  gap-10 my-10 items-center justify-center ">
        {HeroesData.map((data, index) => (
          <div className="group" key={index}>
            <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex flex-col items-end">
              <div className="flex  text-2xl font-bold text-lavender max-w-[250px] items-center justify-center overflow-hidden">
                <div className="flex   items-center justify-center">
                  <Image
                    src={data.img}
                    alt={data.alt}
                    className="w-[250px]"
                    width={408}
                    height={552}
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex justify-center h-full w-full rounded-lg items-center bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                <h1 className="text-xl font-bold text-lavender">{data.alt}</h1>
              </div>
              <p className="mt-5  font-Oswald text-2xl ">{data.type}</p>
              <div className="w-[70px] h-[10px] bg-primary mt-3  rounded-sm opacity-70 "></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Heroes;
