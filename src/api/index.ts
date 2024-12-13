import axios from "axios";

import { Task, TaskList } from "@/types/models";

const API_ROOT = process.env.API_ROOT || "http://localhost:8000";

export async function fetchTaskList(): Promise<TaskList> {
  const response = await axios.get(API_ROOT + "/tasks/");

  return response.data;
}

export async function addTask(title: string, color: string): Promise<Task> {
  const response = await axios.post(API_ROOT + "/tasks/", { title, color });

  return response.data;
}

export async function updateTask(
  id: string,
  title: string,
  color: string,
  completed: boolean
): Promise<Task> {
  const response = await axios.put(API_ROOT + `/tasks/${id}/`, {
    title,
    color,
    completed,
  });

  return response.data;
}

export async function deleteTask(id: string): Promise<{ message: string }> {
  const response = await axios.delete(API_ROOT + `/tasks/${id}/`);

  return response.data;
}
