"use client";
import React from "react";
import FileUpload from "../../components/formupload";

export default function WorkWithUs() {
  return (
    <main className="my-[80px]  flex items-center justify-center flex-col font-Oswald  px-5">
      <div>
      <h1 className="font-semibold text-4xl text-primary mt-[100px] mb-10">
          Welcome to JobsRUs!
        </h1>
      </div>
       
      <FileUpload/>
    </main>
  );
}
