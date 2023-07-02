"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col font-Oswald text-xl"
    >
      {/* CONTACT FORM */}
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/info@jobsrus.com.au"
        method="POST"
      >
        <div className="flex md:flex-row flex-col justify-center items-center  gap-2 ">
          <div className="w-full flex flex-col gap-5">
            <p className="font-semibold text-lavender text-opacity-90">Name</p>
            <input
              className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
              type="text"
              placeholder="Name."
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className=" text-lavender font-semibold ">
                {errors.name.type === "required" && "**This field is required."}
                {errors.name.type === "maxLength" &&
                  "**Max length is 100 characters."}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-5">
            <p className="font-semibold text-lavender text-opacity-90">
              Phone Number
            </p>
            <input
              className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
              type="text"
              placeholder="Phone Number."
              {...register("phone", {
                required: true,
                pattern: /^(0|\+61)[0-9]{9}$/,
              })}
            />
            {errors.email && (
              <p className=" text-lavender font-semibold ">
                {errors.phone.type === "required" &&
                  "**This field is required."}
                {errors.phone.type === "pattern" && "**Invalid email address."}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 mt-5">
          <p className="font-semibold text-lavender text-opacity-90">Email</p>
          <input
            className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
            type="text"
            placeholder="Email."
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className=" text-lavender font-semibold ">
              {errors.email.type === "required" && "**This field is required."}
              {errors.email.type === "pattern" && "**Invalid email address."}
            </p>
          )}
        </div>

        <div className="mt-5 gap-5 flex flex-col">
          <p className="font-semibold text-lavender text-opacity-90">
            Your Message
          </p>
          <textarea
            className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
            type="text"
            placeholder="Enter your message."
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
            })}
          />
          {errors.message && (
            <p className=" text-lavender font-semibold ">
              {errors.message.type === "required" &&
                "**This field is required."}
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <div></div>
          <button
            type="submit"
            className="p-3  shadow-xl font-semibold text-lavender bg-primary mt-5 rounded-xl hover:scale-105
              transition duration-300 "
          >
            SEND A MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
