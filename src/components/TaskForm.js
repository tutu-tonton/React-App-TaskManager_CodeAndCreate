import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
	const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

	const [title, setTitle] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
		// console.log(title);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// 新規追加の場合
		if (!editItem) {
			addTask(title);
			setTitle('');
		} else {
			// 編集ボタンクリックした後、新タイトル入力した場合
			// 旧タイトルを上書きするように、
			editTask(title, editItem.id);
		}
	};

	useEffect(() => {
		if (editItem) {
			// titleに編集タイトルがセットされる
			// inputのvalueがtitleだから、input欄には編集タイトルが表示される
			setTitle(editItem.title);
			console.log(editItem);
		} else {
			setTitle('');
		}
	}, [editItem]);

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
					{/* 編集中なのか、新規追加なのかでボタン表示変える */}
					{editItem ? 'Edit Task' : 'Add Task'}
				</button>
				<button onClick={clearList} className="btn clear-btn">
					All Clear
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
