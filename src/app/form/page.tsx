"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Task } from "@/types/models";

import IconButton from "@/components/Button/IconButton";
import TaskForm from "@/components/TaskForm";

import ArrowLeft from "@/assets/icons/arrow-left.svg";

export default function FormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(dummyTaskData);

  useEffect(() => {
    const loadTask = searchParams.get("task")
      ? JSON.parse(searchParams.get("task") || "")
      : null;

    if (loadTask) {
      setEdit(true);
      setTask(loadTask);
    }
  }, []);

  const handleBackRoute = () => router.push("/");

  const handleSubmit = (task: Task) => {};

  return (
    <div
      style={{
        paddingTop: "0.5rem",
      }}
    >
      <div style={{ display: "inline-block" }}>
        <IconButton icon={ArrowLeft.src} onClick={handleBackRoute} />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <TaskForm edit={edit} task={task} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

const dummyTaskData: Task = {
  id: "",
  title: "",
  color: "",
  completed: false,
  timestamp: 0,
};
