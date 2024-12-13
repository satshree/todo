import React from "react";
import Image from "next/image";

interface IconButtonProps {
  icon: any;
  size?: number;
  onClick: () => void;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <div className="hover:cursor-pointer" onClick={props.onClick}>
      <Image
        src={props.icon}
        width={props.size || 24}
        height={props.size || 24}
        alt="icon"
      />
    </div>
  );
}
