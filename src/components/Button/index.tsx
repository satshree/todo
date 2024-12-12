"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  width?: number | string;
  height?: number | string;
}

export default function Button(props: ButtonProps) {
  const handleClick = () => props.onClick();

  return (
    <div
      className={`w-full font-bold rounded-lg px-5 py-3 bg-[#1E6F9F] hover:cursor-pointer hover:bg-[#2384BC]`}
      style={{
        width: props.width || "inherit",
        height: props.height || "inherit",
      }}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
}
