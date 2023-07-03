"use client";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Portal() {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };
  const [openLanding, setOpenLanding] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 bg-secondary absolute top-0 bottom-0 w-screen z-[20] ${
        openLanding ? "hidden transition duration-300" : "flex"
      }`}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 15,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          background: {
            color: "#6366B8",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <div className=" max-w-screen w-[70%] z-[10] items-center  justify-between flex  text-6xl font-Bebas font-bold text-lavender rounded-md  h-[80%]">
        <div className="flex items-start flex-col justify-start">
          {/* <img src="/jobsruslogo.png" className="w-[100px] " /> */}
          <p className="">
            Jobs <span className="">R</span> Us
          </p>
          <p className=" italic">PORTAL</p>
          <button
            className="bg-primary font-bold border-lavender border-2 rounded-full px-4 py-2 text-xl hover:opacity-80 transition duration-300"
            onClick={() => setOpenLanding(!false)}
          >
            Get started
          </button>
        </div>

        <img
          src="/interview.svg"
          alt="interview image"
          className="avatar w-[600px] animate-float"
        />
      </div>
    </main>
  );
}
