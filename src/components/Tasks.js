import Task from "./Task";

const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map(task => <Task task={task} key={task.id} />)}
		</>
	);
}

export default Tasks;