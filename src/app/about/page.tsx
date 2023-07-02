"use client";
import React from "react";
import ContactTransition from "@/components/ContactTransition";
import UseMediaQuery from "@/components/UseMediaQuery";
import Team from "@/components/team";
import { motion } from "framer-motion";

const AboutUs = () => {
  const isSmallDevice = UseMediaQuery("(max-width: 1020px)");
  const handleClickScrol = (targetId: any, offset = 100) => {
    const element = document.getElementById(targetId);
    if (element) {
      const scrollPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <section className=" flex justify-center flex-col mt-[80px]  items-center font-Oswald overflow-hidden">
      <div className="w-[100%] bg-primary relative flex justify-center items-center md:h-[220px] xxs:h-[150px] overflow-hidden z-10 mb-5">
        <div className="flex flex-col justify-center ">
          <h1 className="  xxs:text-5xl md:text-6xl font-extrabold font-Oswald bottom-4  text-lavender z-10 ">
            ABOUT US
          </h1>
        </div>
        <img
          src="/circles.svg"
          alt=""
          className="absolute w-screen min-h-[150px] object-cover opacity-30 z-[5]"
        />
      </div>
      {/* MAIN SECTION */}
      <div>
        {isSmallDevice ? (
          <div className="flex flex-col justify-center font-Oswald items-center">
            <h1 className=" text-3xl text-primary font-bold">
              JOBS <span className=" text-alt2">R</span> US
            </h1>

            <p className=" w-screen px-2 mt-10 text-alt2 text-xl text-center">
              An employment provider, with a{" "}
              <span className="font-semibold">difference.</span>{" "}
            </p>
            <div className="flex flex-col justify-center items-center gap-8 mt-10">
              <div className="flex flex-row justify-center items-center gap-8">
                {" "}
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>INTEGRITY</p>
                </div>
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>PASSION</p>
                </div>{" "}
              </div>
              <div className="flex flex-row justify-center items-center gap-8">
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>TRUST</p>
                </div>
                <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                  <p>DIVERISTY</p>
                </div>{" "}
              </div>
              <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center">
                <p>CARE</p>
              </div>
            </div>
            <p className="max-w-[800px] text-alt2 text-xl text-center mt-10 w-screen px-2">
              Our core values shape the way our mission is carried out.
            </p>
            <img src="/arrowdown.svg" alt="" className="w-[100px] mt-10" />
          </div>
        ) : (
          <div className="flex flex-col justify-center font-Oswald items-center">
            <h1 className=" text-3xl text-primary font-bold">
              JOBS <span className=" text-alt2">R</span> US
            </h1>

            <p className="max-w-[800px] mt-10 text-alt2 text-2xl">
              An employment provider, with a{" "}
              <span className="font-semibold">difference.</span>{" "}
            </p>
            <div className="flex justify-center items-center gap-8 mt-10">
              <button onClick={() => handleClickScrol("integrity")}>
                <div className="group">
                  <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center overflow-hidden">
                      <h1 className="text-2xl font-bold text-lavender">
                        INTEGRITY
                      </h1>
                    </div>
                    <div className="absolute inset-0 flex justify-center h-full w-full rounded-full bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex   items-center justify-center">
                        <img src="/dogood.svg" alt="" className="w-[150px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button onClick={() => handleClickScrol("passion")}>
                <div className="group">
                  <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center overflow-hidden">
                      <h1 className="text-2xl font-bold text-lavender">
                        PASSION
                      </h1>
                    </div>
                    <div className="absolute inset-0 flex justify-center h-full w-full rounded-full bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex   items-center justify-center">
                        <img
                          src="/giveourbest.svg"
                          alt=""
                          className="w-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button onClick={() => handleClickScrol("trust")}>
                <div className="group">
                  <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center overflow-hidden">
                      <h1 className="text-2xl font-bold text-lavender">
                        TRUST
                      </h1>
                    </div>
                    <div className="absolute inset-0 flex justify-center h-full w-full rounded-full bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex   items-center justify-center">
                        <img
                          src="/standtogether.svg"
                          alt=""
                          className="w-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button onClick={() => handleClickScrol("diversity")}>
                <div className="group">
                  <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center overflow-hidden">
                      <h1 className="text-2xl font-bold text-lavender">
                        DIVERSITY
                      </h1>
                    </div>
                    <div className="absolute inset-0 flex justify-center h-full w-full rounded-full bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex   items-center justify-center">
                        <img
                          src="/diversity.svg"
                          alt=""
                          className="w-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button onClick={() => handleClickScrol("care")}>
                <div className="group">
                  <div className=" transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="flex bg-primary text-2xl font-bold text-lavender w-[150px] h-[150px] rounded-full items-center justify-center overflow-hidden">
                      <h1 className="text-2xl font-bold text-lavender">CARE</h1>
                    </div>
                    <div className="absolute inset-0 flex justify-center h-full w-full rounded-full bg-primary  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex   items-center justify-center">
                        <img src="/caring.svg" alt="" className="w-[150px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <p className="max-w-[800px] text-alt2 text-2xl mt-10">
              Our core values shape the way our mission is carried out.
            </p>
            <img src="/arrowdown" alt="" className="w-[100px] mt-10" />
          </div>
        )}

        {isSmallDevice ? (
          // SMALL DEVICES
          <div className="flex flex-col w-screen px-5 justify-center items-center">
            <div className="flex flex-col w-screen ">
              {/* DO GOOD */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]"
              >
                <p className="text-3xl font-semibold">INTEGRITY</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      Doing right by the participant is always the answer.
                      Although sometimes difficult to do, we believe that if we
                      stick to our clear intentions of helping the participant
                      achieve their goals in an open and honest manner the
                      results will follow. Furthermore we are managed by Islamic
                      values and whilst respecting choice and control, where
                      possible we will ensure that these values are upheld. This
                      means, no alcohol or pork related products are to be
                      brought to the office or home base, again allowing for a
                      more inclusive environment for our primarily muslim
                      clientele.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src="dogood.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
              {/* WE GIVE OUT BEST */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]"
              >
                <p className="text-3xl font-semibold">PASSION</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      We are passionate about our mission to make a positive
                      impact on the Disability employment industry. Every client
                      has their own goals heard and worked towards.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src="giveourbest.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
              {/* WE STAND TOGETHER */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]"
              >
                <p className="text-3xl font-semibold">TRUST</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      Without trust we cannot achieve outcomes. We value
                      collaboration, respect, and positive intentions in all our
                      interactions, and we believe that working together is key
                      to achieving success.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src="standtogether.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
              {/* WE EMBRACE DIVERSITY */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]"
              >
                <p className="text-3xl font-semibold">DIVERSITY</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      Whilst 70% of our staff and clientele are from an Islamic
                      background, we recognise the often untapped potential of
                      diversity within the NDIS. Our diffrences make us stronger
                      and allow for more creativity, experience and diversity
                      within the team and clients.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <Team />
                  </div>
                </div>
              </motion.div>
              {/* CARE */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] h-[50%]"
              >
                <p className="text-3xl font-semibold"> CARE</p>
                <div className="flex justify-center flex-col align-top w-screen relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-t-2xl">
                    <p className=" text-center">
                      You&apos;re not you when you&apos;re hungry, which serves
                      as a reminder that your well-being extends beyond your
                      professional life. To truly excel and reach your
                      potential, it is crucial to establish a strong foundation
                      in all aspects of your life, encompassing personal safety,
                      mental health, and physical health. Only with a stable
                      foundation in place can you effectively pursue and achieve
                      your employment aspirations.
                    </p>
                  </div>
                  <div className="bg-primary w-screen flex justify-center items-center p-5 rounded-b-2xl h-[50%]">
                    <img src="caring.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          // LARGE DEVICES
          <div className="flex flex-col">
            <div className="flex flex-col">
              {/* DO GOOD */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] mr-[60px]"
                id="integrity"
              >
                <p className="absolute top-0 left-[135px] text-3xl font-semibold ">
                  INTEGRITY
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                    <p className=" max-w-[500px] mr-10">
                      Doing right by the participant is always the answer.
                      Although sometimes difficult to do, we believe that if we
                      stick to our clear intentions of helping the participant
                      achieve their goals in an open and honest manner the
                      results will follow. Furthermore we are managed by Islamic
                      values and whilst respecting choice and control, where
                      possible we will ensure that these values are upheld. This
                      means, no alcohol or pork related products are to be
                      brought to the office or home base, again allowing for a
                      more inclusive environment for our primarily muslim
                      clientele.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                    <img src="dogood.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
              {/* WE GIVE OUT BEST */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] ml-[60px]"
                id="passion"
              >
                <p className="absolute top-0 right-[135px] text-3xl font-semibold">
                  PASSION
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                    <p className=" max-w-[500px] ml-10">
                      We are passionate about our mission to make a positive
                      impact on the Disability employment industry. Every client
                      has their own goals heard and worked towards.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                    <img src="giveourbest.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
              {/* WE STAND TOGETHER */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] mr-[60px]"
                id="trust"
              >
                <p className="absolute top-0 left-[135px] text-3xl font-semibold">
                  TRUST
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl">
                    <p className=" max-w-[500px] mr-10">
                      Without trust we cannot achieve outcomes. We value
                      collaboration, respect, and positive intentions in all our
                      interactions, and we believe that working together is key
                      to achieving success.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                    <img src="standtogether.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
              {/* WE EMBRACE DIVERSITY */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] ml-[60px]"
                id="diversity"
              >
                <p className="absolute top-0 right-[135px] text-3xl font-semibold">
                  DIVERSITY
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald  rounded-2xl">
                    <p className=" max-w-[500px] ml-10">
                      Whilst 70% of our staff and clientele are from an Islamic
                      background, we recognise the often untapped potential of
                      diversity within the NDIS. Our diffrences make us stronger
                      and allow for more creativity, experience and diversity
                      within the team and clients.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute left-[-240px] top-[-20px] flex justify-center items-center">
                    <Team />
                  </div>
                </div>
              </motion.div>
              {/*  CARE */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col items-center justify-center relative mt-[150px] mr-[125px] "
                id="care"
              >
                <p className="absolute top-0 left-0 text-3xl font-semibold">
                  CARE
                </p>
                <div className="flex justify-center align-top w-[600px] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl font-Oswald rounded-2xl ">
                    <p className=" max-w-[500px] mr-10">
                      You&apos;re not you when you&apos;re hungry, which serves
                      as a reminder that your well-being extends beyond your
                      professional life. To truly excel and reach your
                      potential, it is crucial to establish a strong foundation
                      in all aspects of your life, encompassing personal safety,
                      mental health, and physical health. Only with a stable
                      foundation in place can you effectively pursue and achieve
                      your employment aspirations.
                    </p>
                  </div>
                  <div className="bg-primary w-[300px] h-[300px] rounded-full z-10 absolute right-[-240px] top-[-20px] flex justify-center items-center">
                    <img src="caring.svg" alt="" className="w-[250px]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <ContactTransition />
    </section>
  );
};

export default AboutUs;
