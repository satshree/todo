"use client";

import React from "react";
import Image from "next/image";

import Button from "../Button";

import styles from "./styles.module.css";

import Rocket from "@/assets/rocket.svg";
import Plus from "@/assets/icons/plus-icon.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-center">
      <Image src={Rocket.src} alt="rocket" width={22} height={36} />
      <div className={`font-extrabold ml-3 ${styles.title}`}>
        <span className="text-[#4EA8DE]">Todo</span>
        <span className="ml-2 text-[#5E60CE]">App</span>
      </div>
      <div className="absolute top-[175px] w-[100%] pl-[25%] pr-[25%]">
        <Button height="50px" onClick={() => {}}>
          <div className="flex items-center justify-center">
            <span className="mr-1">Create Task</span>
            <Image src={Plus.src} width={15} height={15} alt="plus" />
          </div>
        </Button>
      </div>
    </div>
  );
}
