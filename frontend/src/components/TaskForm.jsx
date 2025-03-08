// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.

import React, { useState } from 'react';
const TaskForm = () => {
    const [task, setTask] = useState('');
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Task:', task);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleTaskChange} />
            <button type="submit">Add Task</button>
        </form>
    );
};
export default TaskForm;
