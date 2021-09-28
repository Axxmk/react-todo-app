import './styles/Task.css'

const Task = ({ task }) => {
	return (
		<div className="task">
			<span>{task.text}</span>
		</div>
	);
}

export default Task;