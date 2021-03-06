import { useState, useEffect } from "react"
import AddTask from '../components/AddTask'
import Tasks from '../components/Tasks'

const Home = ({ onShowForm, showForm }) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		}

		getTasks();
	}, [])

	// Fetch tasks from server
	const fetchTasks = async () => {
		try {
			const res = await fetch('http://localhost:5000/tasks');
			const data = await res.json();

			return data;
		}
		catch (error) {
			console.log(error);
		}
	}

	// Fetch single task from server
	const fetchTask = async (id) => {
		try {
			const res = await fetch(`http://localhost:5000/tasks/${id}`);
			const data = await res.json();

			return data;
		}
		catch (error) {
			console.log(error);
		}
	}

	// Add task
	const addTask = async (task) => {
		// const id = ++autoIncrease;
		// const newTask = { id, ...task };

		try {
			const res = await fetch(`http://localhost:5000/tasks`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(task),
			})

			const newTask = await res.json();

			setTasks(tasks.concat(newTask));
			onShowForm();
		}
		catch (error) {
			console.log(error);
		}
	}

	// Delete task
	const deleteTask = async (id) => {
		try {
			await fetch(`http://localhost:5000/tasks/${id}`, {
				method: 'DELETE'
			})

			setTasks(tasks.filter(task => task.id !== id));
		}
		catch (error) {
			console.log(error);
		}
	}

	//Toggle reminder
	const toggleReminder = async (id) => {
		try {
			const taskToToggle = await fetchTask(id);
			const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

			await fetch(`http://localhost:5000/tasks/${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(updTask),
			})

			setTasks(tasks.map(task => task.id === id ? updTask : task));
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			{showForm && <AddTask onAddTask={addTask} />}
			{tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks :)'}
		</>
	);
}

export default Home
