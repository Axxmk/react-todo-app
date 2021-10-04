import { useState } from 'react'
import '../styles/AddForm.css'

const AddTask = ({ onAddTask }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text || !day) {
			alert("Please fill the info :)");
			return;
		}

		onAddTask({ text, day, reminder });

		setText('');
		setDay('');
		setReminder(false);
	}

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-input">
				<label>What To Do?</label>
				<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
			</div>

			<div className="form-input">
				<label>When?</label>
				<input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
			</div>

			<div className="form-input checkbox">
				<label>Set Reminder</label>
				<input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
			</div>

			<input type="submit" value="Save Task" className="btn click" />
		</form>
	);
}

export default AddTask;