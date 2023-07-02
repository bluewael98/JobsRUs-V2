import React from "react";
import Image from "next/image";

const Facts = () => {
  return (
    <section className=" w-screen px-2 py-20 ">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex flex-col  items-center text-primary font-Oswald">
          <h1 className="sm:text-4xl text-3xl font-bold text-center">
            EMPLOYMENT SUPPORT, AS UNIQUE AS YOU ARE.
          </h1>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2  sm:text-2xl text-xl font-bold text-lavender  my-8  gap-4 max-w-[1200px]">
          <div className="flex flex-col justify-between  text-center items-center gap-3  bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300">
            <h2>Personalised, tailored plans.</h2>
            <Image
              src="/personalised.svg"
              alt=""
              className="w-[200px]"
              width={200}
              height={170}
            />
          </div>
          <div className="flex flex-col  text-center justify-between items-center gap-3 bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300">
            <h2>Transition into open employment.</h2>
            <Image
              src="/transition.svg"
              alt=""
              height={577}
              width={677}
              className="w-[200px]"
            />
          </div>
          <div className="flex flex-col justify-between items-center text-center   border-opacity-50 bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300">
            <h2>Live your own life. Choice and control.</h2>
            <Image
              src="/choice.svg"
              alt=""
              className="w-[200px]"
              width={729}
              height={658}
            />
          </div>
          <div className="flex flex-col justify-between items-center text-center bg-primary p-4 rounded-lg hover:scale-105 tansition duration-300 ">
            <h2>3 step screened staff, at your help.</h2>
            <Image
              src="/screenedstaff.svg"
              alt=""
              className="w-[200px]"
              height={633}
              width={833}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
