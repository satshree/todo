import React, { useEffect, useState } from "react";
import { TaskList as TaskListType } from "../../../types/models";

import Clipboard from "@/assets/icons/Clipboard.svg";

import styles from "./styles.module.css";
import Image from "next/image";

interface TaskListProps {
  taskList: TaskListType;
}

export default function TaskList(props: TaskListProps) {
  const [taskList, setTaskList] = useState(props.taskList);

  useEffect(() => setTaskList(props.taskList), [props.taskList]);

  return (
    <div className={styles.container}>
      {taskList.length === 0 ? (
        <>
          <div className="flex items-center justify-center flex-col">
            <Image src={Clipboard.src} width={50} height={50} alt="Empty" />
            <div className="text-[16px] text-[#808080] font-bold mt-2">
              You don't have any tasks registered yet.
            </div>
            <div className="text-[16px] text-[#808080] mt-4">
              Create tasks and organize your to-do items.
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
