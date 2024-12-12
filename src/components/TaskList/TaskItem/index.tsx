import React, { useEffect, useState } from "react";

import { Task } from "../../../../types/models";

import IconButton from "@/components/Button/IconButton";

import Check from "@/assets/icons/check.svg";
import Trash from "@/assets/icons/trash.svg";
import Checked from "@/assets/icons/checked.svg";

interface TaskItemProps {
  task: Task;
  tap: (task: Task) => void;
  delete: (task: Task) => void;
}

export default function TaskItem(props: TaskItemProps) {
  const [task, setTask] = useState(props.task);

  useEffect(() => setTask(props.task), [props.task]);

  return (
    <div className="block w-full h-[70px] border border-[#333333] mb-4 bg-[#262626] rounded-lg">
      <div className="h-full w-full flex p-6 items-center justify-between">
        <div className="flex">
          <IconButton
            size={28}
            icon={task.completed ? Checked.src : Check.src}
            onClick={() => props.tap(task)}
          />
          <div
            className={`ml-4 ${
              task.completed ? "line-through text-gray-500" : "text-inherit"
            }`}
          >
            {task.title}
          </div>
        </div>
        <div className="ml-4">
          <IconButton
            icon={Trash.src}
            size={16}
            onClick={() => props.delete(task)}
          />
        </div>
      </div>
    </div>
  );
}
