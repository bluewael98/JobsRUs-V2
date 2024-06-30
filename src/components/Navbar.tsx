"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Dropdown, css } from "@nextui-org/react";
import UseMediaQuery from "./UseMediaQuery";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const Navbar = () => {
  const hamburgerMenu = UseMediaQuery("(max-width: 1179px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const variants = {
    visible: { x: "0%" },
    hidden: { x: "-100%" },
    exit: { x: "-100%" },
    exitActive: { x: 0 },
  };

  return (
    <>
      {!hamburgerMenu ? (
        <nav
          className={`fixed top-0 w-screen text-lg flex px-10 py-4 justify-center items-center z-40 shadow-sm text-primary font-bebas font-semibold bg-lavender `}
        >
          <div className=" flex justify-between w-full max-w-[1400px] py-0 px-0">
            <div className="flex flex-row justify-center items-center gap-2">
              <img src="/jobsrus.png" className="max-w-[80px] " />
              <p className="text-2xl font-bold hidden min-[1400px]:flex ">
                JOBS<span className="text-alt2">R</span>US{" "}
              </p>
              <p className="font-normal text-[16px] hidden min-[1400px]:flex">
                Your Goal, Our Target.
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 font-bebas text-[16px] font-bold ">
              <div className=" rounded-md py-2 px-4 transition duration-300 flex justify-center items-center gap-10">
                <Link
                  href="/"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    HOME
                  </h2>
                </Link>
                <Link
                  href="/about"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    ABOUT US
                  </h2>
                </Link>

                <Link
                  href="/our-team"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    OUR TEAM
                  </h2>
                </Link>

                <Dropdown>
                  <Dropdown.Trigger>
                    <div className="flex flex-row font-Bebas text-primary text-[16px] font-bold cursor-pointer">
                      <p>NDIS</p>
                      <ArrowDropDownIcon />
                    </div>
                  </Dropdown.Trigger>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item>
                      <Link
                        href="/ndis-services"
                        className="group text-primary transition-all duration-300 ease-in-out"
                      >
                        <h2 className="text-[16px] bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                          NDIS SERVICES
                        </h2>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link
                  href="/contact"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    CONTACT
                  </h2>
                </Link>

                <Dropdown>
                  <Dropdown.Trigger>
                    <div className="flex flex-row font-Bebas text-primary text-[16px] font-bold cursor-pointer">
                      <p>LOOKING FOR WORK?</p>
                      <ArrowDropDownIcon />
                    </div>
                  </Dropdown.Trigger>
                  <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item>
                      <Link
                        href="/work-with-us"
                        className="group text-primary transition-all duration-300 ease-in-out"
                      >
                        <h2 className="text-[16px] bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                          JOIN OUR TEAM
                        </h2>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        href="/portal"
                        className="group text-primary transition-all duration-300 ease-in-out"
                      >
                        <h2 className="text-[16px] bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                          DISABILITY WORK PORTAL
                        </h2>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 w-screen bg-lavender  text-lg text-white  flex px-5 py-4  justify-between items-center z-40">
          <button
            className="rounded-full ml-5 mt-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            <MenuRounded className="text-primary" fontSize="large" />{" "}
          </button>
          {isMenuToggled && (
            <AnimatePresence>
              {/* MOBILE MENU POPUP */}
              {isMenuToggled && (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  exit="exit"
                  className="fixed bg-lavender p-2 top-0 bottom-0 left-0 right-0 w-screen h-screen transition-300 shadow-md  "
                >
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                      <CloseRounded className="text-primary" fontSize="large" />
                    </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="flex flex-col items-start justify-between  h-[50%] font-Jost text-[#292F36] mt-5">
                    <Link
                      href="/"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-primary">Home</p>
                      <ArrowForwardIosRounded className="text-primary" />
                    </Link>
                    <Link
                      href="/portal"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-primary">Job Portal</p>
                      <ArrowForwardIosRounded className="text-primary" />
                    </Link>
                    <Link
                      href="/about"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-primary">About us</p>
                      <ArrowForwardIosRounded className="text-primary" />
                    </Link>
                    <Link
                      href="/our-team"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-primary">Our team</p>
                      <ArrowForwardIosRounded className="text-primary" />
                    </Link>
                    <Link
                      href="/ndis-Services"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-primary">NDIS Services</p>
                      <ArrowForwardIosRounded className="text-primary" />
                    </Link>
                 
                    <Link
                      href="/work-with-us"
                      className=" border-b-[1px] w-full text-start flex justify-between items-center "
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <p className="text-[20px] text-primary">Work with us</p>
                      <ArrowForwardIosRounded className="text-primary" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
