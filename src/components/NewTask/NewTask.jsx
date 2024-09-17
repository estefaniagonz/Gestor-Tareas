import { useContext, useRef, useState } from "react";
import { TaskContext } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css';

export const NewTask = () => {
    const context = useContext(TaskContext);

    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');

    const txtTitle = useRef(null);
    const txtDescription = useRef(null);

    const handleTitleTask = (event) => setTitleTask(event.target.value);
    const handleDescriptionTask = (event) => setDescriptionTask(event.target.value);

    const handleCreateTask = (event) => {
        event.preventDefault();

        const newTask = {
            id: uuidv4(),
            title: titleTask,
            description: descriptionTask,
            status: false
        };

        context.setTasks(prevTasks => [...prevTasks, newTask]);
        context.setFilteredTasks(prevTasks => [...prevTasks, newTask]);
        
        txtTitle.current.value = '';
        txtDescription.current.value = '';

        setTitleTask('');
        setDescriptionTask('');
    };

    return (
        <form className="frm-task">
            <fieldset className="input">
                <label>Titulo de la tarea</label>
                <input
                    className="inputtxt"
                    ref={txtTitle}
                    onChange={handleTitleTask}
                    placeholder="Escribe el titulo de tu tarea"
                    type="text"
                />
            </fieldset>
            <fieldset className="input">
                <label>Descripción de la tarea</label>
                <input
                    className="inputtxt"
                    ref={txtDescription}
                    onChange={handleDescriptionTask}
                    placeholder="Describe tu tarea"
                    type="text"
                    maxLength={100}
                />
            </fieldset>
            <button
                onClick={handleCreateTask}
                className="btn-new-task"
            >
                Crear una nueva tarea
            </button>
        </form>
    );
};
