import ContactTransition from "@/components/ContactTransition";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Pricing",
  description:
    "View our transparent pricing and choose the right service to help you access your desired employment goals.",
};

const NDISPricing = () => {
  return (
    <section className="mt-[80px]  flex items-center justify-center flex-col font-Oswald ">
      <div className="w-[100%] bg-primary relative flex justify-center items-center md:h-[220px] xxs:h-[150px] overflow-hidden z-10 mb-5">
        <div className="flex flex-col justify-center ">
          <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
            PRICING
          </h1>
        </div>
        <img
          src="/circles.svg"
          alt=""
          className="absolute w-screen min-h-[150px] object-cover opacity-30 z-[5]"
        />
      </div>
      <div className="max-w-[1000px] text-alt2  py-10 text-xl flex justify-center flex-col items-center mx-2 text-center">
        <h1 className=" text-3xl text-primary font-bold pb-3">
          JOBS <span className=" text-alt2">R</span> US
        </h1>
        <h2>
          We&apos;re transparent with our pricing, and we&apos;re here to help
          you choose the right service.
        </h2>
        <h2>
          We provide multiple services to assist you in accessing your desired
          employment goals.
        </h2>
        <h2>
          {" "}
          Also provided by JobsRUs is a Saturday leisure day, a day where you
          can enjoy the hard work and studies that you’ve been doing during the
          week and have some fun in the community. The following prices are for
          national participants, as we currently do not provide services to
          remote and very remote participants
        </h2>
      </div>

      <Pricing />

      <div className="flex justify-center items-center mt-10">
        <a href="https://www.ndis.gov.au/media/6638/download?attachment">
          <button className="py-2 px-4 bg-primary rounded-full shadow-md text-lavender text-xl hover:scale-105 transition duration-300">
            Click to view NDIS Price Catalogue
          </button>
        </a>
      </div>
      <ContactTransition />
    </section>
  );
};

export default NDISPricing;
