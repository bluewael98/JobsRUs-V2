"use client";
import React from "react";
import { Widget } from "@typeform/embed-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work with us",
  description: "Come work with us, we would love to have you part of our team.",
};
export default function Home() {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-lavender mt-[90px]">
      <Widget id="58b1b4ad-d661" className="w-screen h-screen" />
    </main>
  );
}
