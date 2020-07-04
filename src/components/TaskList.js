import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import TaskItem from './TaskItem';

const TaskList = () => {
	const { tasks } = useContext(TaskListContext);
	return (
		<div>
			{tasks.length ? (
				<ul className="list">
					{tasks.map((task) => {
						return <TaskItem key={task.id} task={task} />;
					})}
				</ul>
			) : (
				<div className="no-tasks">No Tasks</div>
			)}
		</div>
	);
};

export default TaskList;
