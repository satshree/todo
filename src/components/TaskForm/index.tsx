import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Task } from "@/types/models";

import Button from "../Button";

import Plus from "@/assets/icons/plus-icon.svg";
import Check from "@/assets/icons/mdi_check-bold.svg";

interface TaskFormProps {
  task: Task;
  edit: boolean;
  loading?: boolean;
  handleSubmit: (task: Task) => void;
}

export default function TaskForm(props: TaskFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [title, setTitle] = useState(props.task.title);
  const [color, setColor] = useState(props.task.color);
  const [level, setLevel] = useState(props.task.level || 1);

  useEffect(() => {
    setTitle(props.task.title);
    setColor(props.task.color);
    setLevel(props.task.level);
  }, [props.task]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };
  const handleColorChange = (value: string) => {
    setColor(value);
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("HERE", level, { ...props.task, title, color, level });
          props.handleSubmit({ ...props.task, title, color, level });
        }}
      >
        <div className="w-full">
          <label className="text-[#4EA8DE] font-bold">Title</label>
          <input
            className="w-full rounded-lg border border-[#333333] block p-4 bg-[#262626] mt-2 transition-colors duration-100 placeholder-[#f2f2f2] focus-visible:outline focus-visible:outline-[#1e6f9f] focus-visible:border-[#1e6f9f]"
            placeholder="Ex. Brush your teeth"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
        </div>
        <br />
        <br />
        <div className="w-full">
          <label className="text-[#4EA8DE] font-bold">Color</label>
          <br />
          {colorList.map((col) => (
            <div key={col} className="inline-block">
              <Button
                noBackground={true}
                onClick={() => handleColorChange(col)}
              >
                <div
                  className="w-[30px] h-[30px] rounded-full"
                  style={{
                    backgroundColor: col,
                    border: color === col ? "3px solid #f2f2f2" : "none",
                  }}
                ></div>
              </Button>
            </div>
          ))}
        </div>
        <br />
        <select
          value={level}
          onChange={(e) => {
            setLevel(Number(e.target.value));
          }}
          className="text-black"
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
        <br />
        <br />
        <div className="w-full">
          <Button typeSubmit={true} onClick={() => {}} loading={props.loading}>
            <div className="w-full flex items-center justify-center">
              {props.edit ? (
                <div className="flex items-center">
                  Save{" "}
                  <span className="ml-2">
                    <Image src={Check.src} width={15} height={15} alt="check" />
                  </span>
                </div>
              ) : (
                <div className="flex items-center">
                  Add Task{" "}
                  <span className="ml-2">
                    <Image src={Plus.src} width={15} height={15} alt="plus" />
                  </span>
                </div>
              )}
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
}

const colorList = [
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#A2845E",
];
