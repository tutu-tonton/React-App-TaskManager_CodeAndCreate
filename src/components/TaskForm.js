import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
	const { addTask, clearList } = useContext(TaskListContext);

	const [title, setTitle] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
		// console.log(title);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				onChange={handleChange}
				value={title}
				type="text"
				className="task-input"
				placeholder="Add Task..."
				required
			/>
			<div className="buttons">
				<button type="submit" className="btn add-task-btn">
					Add Task
				</button>
				<button onClick={clearList} className="btn clear-btn">
					All Clear
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
