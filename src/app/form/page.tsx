"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { addTask, updateTask } from "@/api";

import { Task } from "@/types/models";

import IconButton from "@/components/Button/IconButton";
import TaskForm from "@/components/TaskForm";

import ArrowLeft from "@/assets/icons/arrow-left.svg";

export default function FormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

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

  const handleBackRoute = () => {
    if (edit) {
      const confirm = window.confirm("Discard changes?");
      if (!confirm) return;
    }

    router.push("/");
  };

  const handleSubmit = async (task: Task) => {
    try {
      setLoading(true);

      if (edit) {
        await updateTask(task.id, task.title, task.color, task.completed);

        setLoading(false);
        window.alert("Task updated.");
        router.push("/");
      } else {
        await addTask(task.title, task.color);

        setLoading(false);
        router.push("/");
      }
    } catch (err) {
      setLoading(false);
      console.log("ERROR", err);
      window.alert("Something went wrong. Please try again.");
    }
  };

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
        <TaskForm
          edit={edit}
          task={task}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}

const dummyTaskData: Task = {
  id: "",
  title: "",
  color: "#FF3B30",
  completed: false,
  timestamp: 0,
};
