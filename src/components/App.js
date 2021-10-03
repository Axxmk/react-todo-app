import { useState } from "react"
import './styles/App.css'
import AddTask from './AddTask'
import Header from './Header'
import Tasks from './Tasks'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food shopping',
      day: 'Sep 27th at 4:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Playing Poker',
      day: 'Sep 28th at 10:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Study ReactJS',
      day: 'Sep 30th at 4:00pm',
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };

    setTasks(tasks.concat(newTask));
    setShowForm(!showForm);
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header onShowTask={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask onAddTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks :)'}
    </div>
  );
}

export default App;
