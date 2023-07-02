"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import UseMediaQuery from "./UseMediaQuery";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

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
          <div className=" flex justify-between w-full max-w-[1400px]">
            <div className="min-w-[200px]">
              <img src="/jobsrus.png" className="max-w-[50px]" />
            </div>

            <div className="flex justify-center items-center gap-4 font-bebas text-[18px] font-bold ">
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

                <Dropdown
                  label="NDIS"
                  inline={true}
                  className="w-[200px] bg-lavender shadow-lg"
                >
                  <Dropdown.Item>
                    <Link
                      href="/ndis-pricing"
                      className="group text-primary transition-all duration-300 ease-in-out"
                    >
                      <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                        NDIS SERVICES
                      </h2>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      href="/ndis-services"
                      className="group text-primary transition-all duration-300 ease-in-out"
                    >
                      <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                        NDIS PRICING
                      </h2>
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
                <Link
                  href="/contact"
                  className="group text-primary transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:opacity-80 transition-all duration-500 ease-out">
                    CONTACT
                  </h2>
                </Link>
                <Link
                  href="/work-with-us"
                  className="group text-lavender transition-all duration-300 ease-in-out"
                >
                  <h2 className="bg-left-bottom bg-primary bg-gradient-to-r from-lavender to-lavender bg-[length:0%_50px] bg-no-repeat group-hover:bg-[length:100%_50px] group-hover:opacity-80 group-hover:text-primary transition-all duration-500 ease-out py-2 px-3 rounded-full">
                    JOIN OUR TEAM
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 w-screen bg-gray-900  text-lg text-white  flex px-5 py-4  justify-between items-center z-40">
          <button
            className="rounded-full ml-5 mt-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            <MenuRounded />{" "}
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
                  className="fixed left-0 top-0 bottom-0 height[100%] bg-lavender p-2 w-[300px] transition-300 shadow-md  "
                >
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                      <CloseRounded />
                    </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="flex flex-col gap-10 ml-5 text-2xl  text-primary font-semibold max-w-screen">
                    <Link href="/">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        Pricing
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        About us
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        Contact
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        Blog
                      </div>
                    </Link>
                    <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                      <Dropdown
                        label="Features"
                        inline={true}
                        className="w-full max-w-[250px]"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
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
