import React, { useEffect, useState } from "react";
import Image from "next/image";

import { deleteTask, updateTask } from "@/api";

import TaskItem from "./TaskItem";
import { Task, TaskList as TaskListType } from "@/types/models";

import Clipboard from "@/assets/icons/Clipboard.svg";

interface TaskListProps {
  taskList: TaskListType;
  fetch: () => void;
}

export default function TaskList(props: TaskListProps) {
  const [taskList, setTaskList] = useState(props.taskList);

  useEffect(() => setTaskList(props.taskList), [props.taskList]);

  const handleTap = async (task: Task) => {
    try {
      await updateTask(task.id, task.title, task.color, !task.completed);
      props.fetch();
    } catch (err) {
      console.log("ERROR", err);
      window.alert("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (task: Task) => {
    const resp = window.confirm("Are you sure to delete this task?");
    if (!resp) return;

    try {
      await deleteTask(task.id);
      window.alert("Task deleted.");
      props.fetch();
    } catch (err) {
      console.log("ERROR", err);
      window.alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-[250px]">
      {taskList.length === 0 ? (
        <>
          <div className="border-t border-t-[#333333] rounded-t-lg flex items-center justify-center flex-col ml-auto mr-auto w-full">
            <Image src={Clipboard.src} width={50} height={50} alt="Empty" />
            <div className="text-[16px] text-[#808080] font-bold mt-2">
              You don&#39;t have any tasks registered yet.
            </div>
            <div className="text-[16px] text-[#808080] mt-4">
              Create tasks and organize your to-do items.
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full">
            {taskList.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                tap={handleTap}
                delete={handleDelete}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
