import React, { useContext } from 'react'
import { TaskContext } from '../Context/Context'
import './ItemTask.css'

export const ItemTask = ({ idTask, titleTask, content }) => {
  const { tasks, updateTaskStatus } = useContext(TaskContext)
  const task = tasks.find(task => task.id === idTask)

  const handleCheckboxChange = () => {
    updateTaskStatus(idTask, !task.status)
  }

  return (
    <li className={`item-task ${task.status ? "checked" : ""}`}>
      <div className={`circle-state ${task.status ? "circle-green" : ""}`}></div>
      <div className="task-content">
        <h2>{titleTask}</h2>
        <p>{content}</p>
      </div>
      <input 
        type="checkbox"
        checked={task.status}
        onChange={handleCheckboxChange}
      />
    </li>
  )
}