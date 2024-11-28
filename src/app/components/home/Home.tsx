"use client";
import { useEffect, useState } from "react";
import About from "./About";
import Bannner from "./Banner";
import Description from "./Description";
import Portfolio from "./Portfolio";
import EngineStart from "../modal/EngineStart";

export default function Home() {
  return (
    <div className={`w-full ${"h-auto overflow-scroll"}`}>
      <>
        <Bannner />
        <Description />
        <About />
        <Portfolio />
      </>
    </div>
  );
}
