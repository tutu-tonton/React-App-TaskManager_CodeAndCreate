import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
	const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

	const [tasks, setTasks] = useState(initialState);
	// { title: 'Read the book', id: 1 },
	// { title: 'Wash the car', id: 2 },
	// { title: 'Write some code', id: 3 },

	const [editItem, setEditItem] = useState(null);

	//========================================
	//  localStorageを利用
	//========================================
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	//========================================
	//  addTask
	//========================================
	const addTask = (title) => {
		setTasks([...tasks, { title, id: uuidv4() }]);
	};

	//========================================
	//  removeTask
	//========================================
	const removeTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//========================================
	//  Clear All
	//========================================
	const clearList = () => {
		setTasks([]);
	};

	//========================================
	//  Edit - find
	//========================================
	const findItem = (id) => {
		const item = tasks.find((task) => task.id === id);

		setEditItem(item);
	};
	//========================================
	//  Edit - Edit
	//========================================
	const editTask = (title, id) => {
		// 元の配列に対して、編集idと違うものは元のまま、編集idと同じものは新タイトルにする
		const newTasks = tasks.map((task) => (task.id === id ? { title, id } : task));

		setTasks(newTasks);
		setEditItem(null);
	};

	return (
		<TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
			{props.children}
		</TaskListContext.Provider>
	);
};

export default TaskListContextProvider;
