"use client";

import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

import Rocket from "@/assets/rocket.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-center">
      <Image src={Rocket.src} alt="rocket" width={22} height={36} />
      <div className={`font-extrabold ml-3 ${styles.title}`}>
        <span className="text-[#4EA8DE]">Todo</span>
        <span className="ml-2 text-[#5E60CE]">App</span>
      </div>
    </div>
  );
}
