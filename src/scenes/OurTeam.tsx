"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UseMediaQuery from "@/components/UseMediaQuery";
import WeAreHiring from "@/components/WeAreHiring";
import ContactTransition from "@/components/ContactTransition";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

// Local data for Tureif
import { Employees } from "@/components/Data";

interface Employee {
  bio: string;
  key: string;
  role: string;
  photo: string;
  Language: string | null;
  fullName: string;
  cpiTrained: string;
}

const OurTeam = () => {
  const [open, setOpen] = useState<string | boolean>(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isLargeDevice = UseMediaQuery("(min-width: 1440px)");
  const isSmallDevice = UseMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>(
          "https://hook.eu2.make.com/9nfv7njs3urcf312gc70hnsaknza5tri"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setError("Failed to fetch employee data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const openModal = (id: any) => {
    setOpen(id);
  };

  const closeModal = () => {
    setOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="flex justify-center flex-col mt-[80px] items-center font-Oswald pb-10">
      <Head>
        <title>Our team</title>
        <meta name="description" content="Our team of HEROES." />
      </Head>
      <WeAreHiring />
      {/* HEADER */}
      {isLargeDevice ? (
        <div className="w-screen bg-primary relative flex justify-between overflow-hidden mb-[5rem]">
          <div className="flex flex-col justify-center pl-10">
            <h1 className="xxs:text-4xl md:text-6xl font-extrabold font-Oswald bottom-4 text-lavender z-10">
              OUR TEAM OF HEROES
            </h1>
          </div>
          <div className="flex z-20 top-[25px] justify-center items-center shadow-5xl overflow-hidden w-[600px] ml-[100px] rounded-bl-[200px] pl-[25px] shadow--l5xl whitespace-pre bg-primary bg-opacity-80">
            <Image
              src="/group.webp"
              alt="Photo of the JobsRUs Group"
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
              OUR TEAM
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
                OUR TEAM OF HEROES
              </h1>
              <Image
                src="/group.webp"
                alt="A photo of the JobsRUs Group"
                className="z-10 w-screen border-8 border-lavender rounded-[100px]"
                width={1740}
                height={1210}
              />
            </div>
            {/* P1*/}
            {employees.map((employee, index) => (
              <div
                className="flex flex-col items-center justify-between relative"
                key={index}
              >
                <div className="flex justify-center items-center align-top w-[screen] relative">
                  <div className="bg-alt2 text-lavender mt-10 p-[2rem] text-xl flex flex-col gap-5 justify-center items-center font-Oswald rounded-2xl text-center">
                    <p className="max-w-screen truncate-bio">{employee.bio}</p>
                    <Image
                      src={employee.photo}
                      alt={`Photo of ${employee.fullName}`}
                      className="min-w-[100px] max-w-[200px]"
                      height={200}
                      width={200}
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
              Meet our team of{" "}
              <span className="font-semibold opacity-100 italic">HEROES.</span>
            </h1>
            <h1 className="md:text-5xl xxs:text-2xl font text-primary">
              Honest, Empathetic, Reliable, and Open-minded individuals.
            </h1>
            {employees.map((employee, index) => (
              <p
                className="text-lg text-alt2 text-semibold font-Oswald truncate-bio"
                key={index}
              >
                {employee.bio}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* TEAM */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-semibold text-4xl text-primary mt-[100px] mb-10">
          OUR TEAM
        </h1>
        {/* TURIEF */}
        <Fragment>
          <div className="flex justify-center items-center flex-col text-center">
            <div
              className="rounded-full bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
              onClick={() => openModal(Employees[0].name)}
            >
              <Image
                src={Employees[0].photo}
                alt={`Photo of ${Employees[0].name}`}
                className="rounded-full w-[200px] h-[200px] object-cover"
                height={200}
                width={200}
              />
            </div>
            <h2 className="text-xl font-semibold text-primary mt-5">
              {Employees[0].name}
            </h2>
            <h2 className="text-lg font-semibold text-alt2 my-2">
              {Employees[0].position}
            </h2>

            <div className="flex justify-center items-center gap-2 ">
              <h2 className="text-lg font-semibold text-alt2 "></h2>

              <img
                src="/cpi.jpg"
                alt="cpi logo"
                className="w-[30px] rounded-full"
              />
            </div>

            <p className="w-[240px] text-alt2 font-semibold">
              {Employees[0].language}
            </p>

            <p className="w-[240px] text-alt2 truncate-bio">
              {Employees[0].bio1}
            </p>
          </div>
          <Transition
            show={open.toString() === Employees[0].name}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-100 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-80 opacity-0"
            as={Fragment}
          >
            <Dialog
              as="div"
              className="fixed inset-0 z-50 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                  >
                    <p className="text-primary font-semibold text-3xl">
                      {Employees[0].name}
                    </p>
                    <p className="text-alt2 font-semibold text-2xl">
                      {Employees[0].position}
                    </p>
                    <p className="w-[240px] text-alt2 font-semibold text-center">
                      {Employees[0].language}
                    </p>
                  </Dialog.Title>
                  <div className="mt-2 text-center text-xl text-alt2 gap-4 flex flex-col">
                    {Employees[0].bio2.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition>
        </Fragment>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xxs:grid-cols-1 mt-[200px] gap-[200px] items-start">
          {employees.map((employee, index) => (
            <Fragment key={index}>
              <div className="flex justify-center items-center flex-col text-center">
                <div
                  className="rounded-full bg-primary flex flex-col justify-center items-center content-center w-[220px] h-[220px] hover:scale-105 cursor-pointer transition: duration-500"
                  onClick={() => openModal(employee.fullName)}
                >
                  <Image
                    src={employee.photo}
                    alt={`Photo of ${employee.fullName}`}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                    height={200}
                    width={200}
                  />
                </div>
                <h2 className="text-xl font-semibold text-primary mt-5">
                  {employee.fullName}
                </h2>
                <h2 className="text-lg font-semibold text-alt2 my-2">
                  {employee.role}
                </h2>

                {employee.cpiTrained === "Yes" && (
                  <div className="flex justify-center items-center gap-2">
                    <h2 className="text-lg font-semibold text-alt2">
                      CPI Trained
                    </h2>

                    <img
                      src="/cpi.jpg"
                      alt="cpi logo"
                      className="w-[30px] rounded-full"
                    />
                  </div>
                )}

                {employee.Language && (
                  <p className="w-[240px] text-alt2 font-semibold">
                    Fluent in {employee.Language}
                  </p>
                )}

                <p className="w-[240px] text-alt2 truncate-bio line-clamp-2">
                  {employee.bio}
                </p>
              </div>
              <Transition
                show={open.toString() === employee.fullName}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-100 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-80 opacity-0"
                as={Fragment}
              >
                <Dialog
                  as="div"
                  className="fixed inset-0 z-50 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>

                    <div className="inline-block w-full max-w-[600px] p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg flex flex-col gap-3 justify-center items-center leading-6"
                      >
                        <p className="text-primary font-semibold text-3xl">
                          {employee.fullName}
                        </p>
                        <p className="text-alt2 font-semibold text-2xl">
                          {employee.role}
                        </p>
                        {employee.Language && (
                          <p className="w-[240px] text-alt2 font-semibold text-center">
                            Fluent in {employee.Language}
                          </p>
                        )}
                      </Dialog.Title>
                      <div className="mt-2 text-center text-xl text-alt2 gap-4 flex flex-col">
                        {employee.bio.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                          onClick={() => setOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
