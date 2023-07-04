import React from "react";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact JobsRUs for all your NDIS employment needs. Our contact details are available here.",
};
const Contact = () => {
  return (
    <section className=" flex justify-center flex-col mt-[80px]  items-center font-Bebas xxs:text ">
      <div className="w-[100%] bg-primary relative flex justify-center items-center md:h-[220px] xxs:h-[150px] overflow-hidden z-10">
        <div className="flex flex-col justify-center ">
          <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
            CONTACT US
          </h1>
        </div>
        <img
          src="/circles.svg"
          alt="a circle photo"
          className="absolute w-screen opacity-30 z-[5]"
        />
      </div>

      {/* CONTACT BOX */}
      <div className="z-10 relative w-full flex flex-col justify-center items-center md:px-10">
        <div className=" lg:px-20 lg:py-20 md:py-10 px:10  mt-[80px] flex flex-col items-center justify-center  z-40 rounded-3xl text-primary ">
          <div className="flex md:justify-between xxs:flex-col xxs:justify-center md:flex-row align-top items-center gap-10">
            <div className="flex flex-col xxs:justify-center xxs:items-center md:items-start min-w-[300px] max-w-[500px] py-5 px-5 bg-primary rounded-lg text-lavender ">
              <h1 className="md:text-2xl xxs:text-xl font-bold  my-5 mt-12">
                OUR DETAILS
              </h1>
              <div className="flex flex-col sm:gap-3 xxs:gap-5 xxs:text-center md:text-start xxs:justify-center md:justify-start xxs:items-center md:items-start">
                <div className="flex items-center  xxs:justify-center sm:justify-start  gap-2">
                  <img
                    src="/location.svg"
                    alt="a photo of our location"
                    className="w-[30px]"
                  />
                  <h2 className="text-xl font-bold ">Our Address</h2>
                </div>

                <p>
                  <a
                    href="https://goo.gl/maps/du94CGnpjmnUndcH8"
                    className="cursor-pointer underline-offset-3"
                  >
                    Suite 902, L9, 66-72 Rickard Rd, Bankstown NSW 2200.
                  </a>{" "}
                </p>
                <p>
                  Building is named Civic towers, located above the council.
                </p>
                <a
                  href="https://www.google.com.au/maps/place/Jobs+R+Us/@-33.9143616,151.0347469,15z/data=!4m2!3m1!1s0x0:0xc07be50fb548fbae?sa=X&ved=2ahUKEwjsnOnk-vX9AhWezzgGHaa2DA0Q_BJ6BAhxEAk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/wearehere.JPG"
                    alt="we are located here"
                    className="w-[200px] shadow-sm rounded-3xl hover:scale-[200%] object-cover cursor-pointer transition-all ease-out duration-500"
                  />
                </a>
                <div className="flex items-center gap-2 xxs:justify-center sm:justify-start">
                  <img
                    src="/email.svg"
                    alt="an email icon"
                    className="w-[30px]"
                  />
                  <h2 className="text-xl font-bold ">Email</h2>
                </div>
                <p>info@jobsrus.com.au</p>
                <div className="flex items-center gap-2 xxs:justify-center xxs:content-center sm:justify-start">
                  <img
                    src="phone.svg"
                    alt="a phone icon"
                    className="w-[30px]"
                  />
                  <h2 className="text-xl font-bold ">Phone</h2>
                </div>

                <p>02 9703 5732</p>
                <div className="flex items-center gap-2">
                  <img
                    src="mobile.svg"
                    alt="a mobile icon"
                    className="w-[30px]"
                  />
                  <h2 className="text-xl font-bold ">Mobile</h2>
                </div>

                <p>0450 518 508</p>
              </div>
            </div>
            <div className="px-5 py-5">
              <h1 className="md:text-2xl xxs:text-xl font-bold  my-5 text-center">
                WE WOULD LOVE TO HEAR FROM YOU!
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="py-10"></div>

        <img
          src="/blobscatter.svg"
          className="w-screen h-1/2 absolute bottom-0 opacity-60  z-10  "
          alt="a blob scatter for design purposes in the background"
        />
      </div>
    </section>
  );
};

export default Contact;
