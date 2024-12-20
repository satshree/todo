"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  loading?: boolean;
  typeSubmit?: boolean;
  noBackground?: boolean;
  width?: number | string;
  height?: number | string;
}

export default function Button(props: ButtonProps) {
  const handleClick = () => props.onClick();

  return (
    <button
      type={props.typeSubmit ? "submit" : "button"}
      className={`font-bold rounded-lg px-5 py-3  hover:cursor-pointer ${
        props.noBackground ? "" : "bg-[#1E6F9F] hover:bg-[#2384BC]"
      }`}
      style={{
        width: props.width || "inherit",
        height: props.height || "inherit",
      }}
      onClick={handleClick}
    >
      {props.loading ? <>Please wait ...</> : props.children}
    </button>
  );
}
