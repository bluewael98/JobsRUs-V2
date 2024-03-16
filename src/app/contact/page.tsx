"use client";
import React from "react";
import { Widget } from "@typeform/embed-react";
import Head from "next/head";

export default function WorkWithUs() {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-lavender mt-[90px]">
      <Head>
        <title>Contact us</title>
        <meta name="description" content="We would love to hear from you!" />
      </Head>
      <Widget id="H0cYHFIg" className="w-screen h-screen" />
    </main>
  );
}
