import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import '../styles/Task.css'

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
			<div>
				<h4>
					{task.text}
				</h4>
				<p>{task.day}</p>
			</div>

			<div>
				<FaPencilAlt style={{ color: 'grey', marginRight: '12px' }} className="icon click" />
				<FaTrash style={{ color: 'rgb(253, 98, 98)' }} className="icon click" onClick={() => onDelete(task.id)} />
			</div>
		</div >
	);
}

export default Task;