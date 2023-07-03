"use client";
import React, { useState } from "react";
import Portal from "@/components/Portal";
import { Widget } from "@typeform/embed-react";
export default function Home() {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-secondary">
      <Portal />
      <Widget id="Z4KYGr5j" className="w-screen h-screen" />
    </main>
  );
}
