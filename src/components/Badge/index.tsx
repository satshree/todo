import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge(props: BadgeProps) {
  return (
    <div className="bg-[#333333] rounded-full p-[0.75rem] ml-2 min-w-[25px] h-[20px] flex items-center justify-center">
      {props.children}
    </div>
  );
}
