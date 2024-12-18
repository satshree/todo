"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { fetchTaskList } from "@/api";

import { TaskList as TaskListType } from "@/types/models";

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import TaskList from "@/components/TaskList";

import Plus from "@/assets/icons/plus-icon.svg";

export default function Home() {
  const router = useRouter();

  const [taskList, setTaskList] = useState<TaskListType>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const tasks = await fetchTaskList(query);
    setTaskList(tasks);
  };

  const getTaskCount = () => taskList.length;
  const getCompletedTaskCount = () =>
    taskList.filter((task) => task.completed).length;

  const handleCreateRoute = () => router.push("/form");

  return (
    <>
      <div className="absolute top-[-25px] w-full">
        <Button height="50px" onClick={handleCreateRoute}>
          <div className="flex items-center justify-center">
            <span className="mr-1">Create Task</span>
            <Image src={Plus.src} width={15} height={15} alt="plus" />
          </div>
        </Button>
      </div>
      <div>
        <input
          className="text-black w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchList}>Search</button>
      </div>
      <br />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[#4EA8DE] font-bold">Tasks</span>{" "}
          <Badge>{getTaskCount()}</Badge>
        </div>
        <div className="flex items-center">
          <span className="text-[#8284FA] font-bold">Completed</span>{" "}
          <Badge>
            {getCompletedTaskCount()} of {getTaskCount()}
          </Badge>
        </div>
      </div>
      <br />
      <br />
      <div>
        <TaskList taskList={taskList} fetch={fetchList} />
      </div>
    </>
  );
}

// const dummyData: TaskListType = [
//   {
//     id: "1",
//     title:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     color: "#FF3B30",
//     completed: false,
//     timestamp: 0,
//   },
//   {
//     id: "2",
//     title:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     color: "#FFCC00",
//     completed: true,
//     timestamp: 0,
//   },
// ];
