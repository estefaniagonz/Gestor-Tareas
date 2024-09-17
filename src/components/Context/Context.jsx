import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const tareasIniciales = [
  { id: uuidv4(), title: "Tarea de ejemplo 1", description: "descripción pendiente 1", status: false },
  { id: uuidv4(), title: "Tarea de ejemplo 2", description: "descripción pendiente 2", status: true },
  { id: uuidv4(), title: "Tarea de ejemplo 3", description: "descripción pendiente 3", status: true },
];

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tareasIniciales);
  const [filteredTasks, setFilteredTasks] = useState(tareasIniciales);

  const [pendingTasks, setPendingTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ 
      tasks,
      setTasks, 
      filteredTasks, 
      setFilteredTasks,
      updateTaskStatus,
      pendingTasks, 
      setPendingTasks, 
      doneTasks, 
      setDoneTasks 
    }}> 
      {children}
    </TaskContext.Provider>
  );
};