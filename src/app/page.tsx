import TheMessage from "@/components/TheMessage";
import Heroes from "@/components/Heroes";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Facts from "@/components/Facts";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";

const Home = () => {
  return (
    <section className="  w-full bg-lavender font-Oswald overflow-hidden mt-[80px] ">
      <Head>
        <title>JobsRUs - Home</title>
        <meta
          name="description"
          content="Empowering individuality through Personalised NDIS solutions."
        />
      </Head>
      {/* Hero Seciton */}
      <HeroSection />

      {/* EMPLOYMENT SUPPORT AS UNIQUE AS YOU ARE */}
      <Facts />

      {/* HEROES SECTION */}
      <Heroes />

      {/* OUR MESSAGE SECTION */}
      <TheMessage />

      {/* REVIEWS SECTION */}
      <Reviews />

      {/* CONTACT SECTION */}
      <section className=" flex sm:flex-row flex-col justify-center font-Oswald text-primary gap-10 px-5 mb-20 py-5 items-start relative">
        <div className="flex flex-col sm:w-[500px] xxs:w-full my-5 z-10 bg-primary text-lavender rounded-lg pl-5 ">
          <h1 className="text-2xl font-bold  my-5">OUR DETAILS</h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold ">Our Address</h2>
            <p>
              <a
                href="https://goo.gl/maps/du94CGnpjmnUndcH8"
                className="cursor-pointer underline-offset-3"
              >
                Suite 902, L9, 66-72 Rickard Rd, Bankstown NSW 2200.
              </a>{" "}
            </p>
            <p className="mb-[30px]">
              Building is named Civic towers, located above the council.
            </p>
            <h2 className="text-xl font-bold ">Email</h2>
            <p className="mb-[30px]">info@jobsrus.com.au</p>
            <h2 className="text-xl font-bold ">Phone</h2>
            <p className="mb-[30px]">02 9703 5732</p>
            <h2 className="text-xl font-bold ">Mobile</h2>
            <p className="mb-[30px]">0450 518 508</p>
          </div>
        </div>
        <div className="flex flex-col sm:w-[500px] xxs:w-full mt-5 items-start z-10">
          <h1 className="text-2xl font-bold  my-5">CONTACT US HERE</h1>
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Home;
