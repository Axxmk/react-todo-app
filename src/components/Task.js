import { FaTrash } from 'react-icons/fa'
import './styles/Task.css'

const Task = ({ task, onDelete }) => {
	return (
		<div className="task">
			<div>
				<h4>
					{task.text}
				</h4>
				<p>{task.day}</p>
			</div>
			<FaTrash style={{ color: 'rgb(253, 98, 98)' }} className="icon click" onClick={() => onDelete(task.id)} />
		</div>
	);
}

export default Task;