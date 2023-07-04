"use client";
import React from "react";
import { Widget } from "@typeform/embed-react";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-lavender mt-[90px]">
      <Head>
        <title>Work with us</title>
        <meta
          name="description"
          content="Come work with us, we would love to have you part of our team."
        />
      </Head>
      <Widget id="58b1b4ad-d661" className="w-screen h-screen" />
    </main>
  );
}
