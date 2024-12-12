import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge(props: BadgeProps) {
  return (
    <div className="bg-[#333333] rounded-full p-[0.15rem] ml-2 w-[25px] h-[20px] flex items-center justify-center">
      {props.children}
    </div>
  );
}
