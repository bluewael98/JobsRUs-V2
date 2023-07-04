"use client";
import React from "react";
import Portal from "@/components/Portal";
import { Widget } from "@typeform/embed-react";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-lavender mt-[90px]">
      <Head>
        <title>Disability Job Portal</title>
        <meta
          name="description"
          content="Discover your dream job and take the next step in your career with our comprehensive job portal."
        />
      </Head>
      <Portal />
      <Widget id="Z4KYGr5j" className="w-screen h-screen" />
    </main>
  );
}
