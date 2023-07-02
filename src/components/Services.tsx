"use client";
import { useState } from "react";

export default function Services({ title, image, logo, body }: any) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-screen relative">
      <button onClick={() => setClicked(!clicked)}>
        <div
          className={`flex justify-center items-center text-primary p-5 mx-auto text-center max-w-screen bg-lavender shadow-lg rounded-lg ${
            clicked
              ? "scale-[105%] transition duration-200 xxs:max-w-screen sm:max-w-[60%] mx-auto max-w-screen flex-wrap bg-primary text-lavender text-opacity-80"
              : "scale-[100%] transition duration-200 max-w-screen w-[370px] "
          }`}
        >
          <div
            className={`flex flex-col gap-4 justify-center items-center text-primary font-sans font-bold ${
              clicked ? "hidden" : "flex"
            }`}
          >
            <h1>{title}</h1>
            <img
              src={image}
              className={`h-[150px] w-[150px] rounded-full bg-primary p-2`}
            />
            {logo}
          </div>
          {clicked && (
            <div className="flex flex-col gap-4 justify-center text-start max-w-screen px-4 py-4 text-lavender">
              {" "}
              {body}
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
