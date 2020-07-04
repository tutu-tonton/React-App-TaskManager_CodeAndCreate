import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import TaskItem from './TaskItem';

const TaskList = () => {
	const { tasks } = useContext(TaskListContext);
	return (
		<div>
			<ul className="list">
				{tasks.map((task) => {
					return <TaskItem task={task} />;
				})}
			</ul>
		</div>
	);
};

export default TaskList;
