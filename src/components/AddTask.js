import { useState } from 'react'
import './styles/AddForm.css'

const AddTask = () => {
	const [text, setText] = useState('');
	const [date, setDate] = useState('');
	const [reminder, setReminder] = useState(false);

	return (
		<form className="add-form">
			<div className="form-input">
				<label>What To Do?</label>
				<input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
			</div>

			<div className="form-input">
				<label>When?</label>
				<input type="text" placeholder="Add Day & Time" value={date} onChange={(e) => setDate(e.target.value)} />
			</div>

			<div className="form-input checkbox">
				<label>Set Reminder</label>
				<input type="checkbox" value={reminder} onChange={() => setReminder(!reminder)} />
			</div>

			<input type="submit" value="Save Task" className="btn click" />
		</form>
	);
}

export default AddTask;