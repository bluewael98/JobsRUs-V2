"use client";
import React from "react";
import { useForm } from "react-hook-form";

const WorkForm = () => {
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
      className="flex justify-center items-center flex-col font-Oswald text-xl my-[100px]"
    >
      {/* CONTACT FORM */}
      <form
        onSubmit={onSubmit}
        target="_blank"
        action="https://formsubmit.co/info@jobsrus.com.au"
        method="POST"
      >
        <div className="w-full flex flex-col gap-3 mb-3">
          <p className="font-semibold text-primary text-opacity-90">Name</p>
          <input
            className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
            type="text"
            placeholder="Name"
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

        <div className="w-full flex flex-col gap-3 mb-3">
          <p className="font-semibold text-primary text-opacity-90">
            Mobile Number
          </p>
          <input
            className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
            type="text"
            placeholder="Mobile Number"
            {...register("mobile", {
              required: true,
              pattern: /^(0|\+61)[0-9]{9}$/,
            })}
          />
          {errors.mobile && (
            <p className=" text-lavender font-semibold ">
              {errors.mobile.type === "required" && "**This field is required."}
              {errors.mobile.type === "pattern" &&
                "**Invalid mobile number format."}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-3 mb-3">
          <p className="font-semibold text-primary text-opacity-90">
            Attach a Resume
          </p>
          <input
            className="w-full bg-lavender text-black p-3 border-2 border-primary border-opacity-60"
            type="file"
            {...register("resume", {
              required: true,
            })}
          />
          {errors.resume && (
            <p className=" text-lavender font-semibold ">
              {errors.resume.type === "required" && "**This field is required."}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-3 mb-3">
          <p className="font-semibold text-primary text-opacity-90">
            Leave a Message
          </p>
          <textarea
            className="w-full bg-lavender text-black placeholder-opaque-black p-3 border-2 border-primary border-opacity-60"
            type="text"
            placeholder="Your message"
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
            className="p-3 shadow-lg font-semibold text-lavender bg-primary mt-5 rounded-xl hover:scale-105
              transition duration-300 "
          >
            Apply Now!
          </button>
        </div>
      </form>
    </section>
  );
};

export default WorkForm;
