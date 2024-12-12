"use client";

import { useState } from "react";
import Image from "next/image";

import { TaskList as TaskListType } from "@/types/models";

import Badge from "@/components/Badge";
import Button from "@/components/Button";

import styles from "./styles.module.css";

import Plus from "@/assets/icons/plus-icon.svg";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [taskList, setTaskList] = useState<TaskListType>(dummyData);

  const getTaskCount = () => taskList.length;
  const getCompletedTaskCount = () =>
    taskList.filter((task) => task.completed).length;

  return (
    <>
      <div className={styles.app}>
        <div className="absolute top-[-25px] w-full">
          <Button height="50px" onClick={() => {}}>
            <div className="flex items-center justify-center">
              <span className="mr-1">Create Task</span>
              <Image src={Plus.src} width={15} height={15} alt="plus" />
            </div>
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-[#4EA8DE] font-bold">Tasks</span>{" "}
            <Badge>{getTaskCount()}</Badge>
          </div>
          <div className="flex items-center">
            <span className="text-[#8284FA] font-bold">Completed</span>{" "}
            <Badge>{getCompletedTaskCount()}</Badge>
          </div>
        </div>
        <br />
        <br />
        <div>
          <TaskList taskList={taskList} />
        </div>
      </div>
    </>
  );
}

const dummyData: TaskListType = [
  {
    id: "1",
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    color: "#fff",
    completed: false,
    timestamp: 0,
  },
  {
    id: "2",
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    color: "#fff",
    completed: true,
    timestamp: 0,
  },
];
