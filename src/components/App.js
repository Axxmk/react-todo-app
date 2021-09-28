import { useState } from "react"
import './styles/App.css'
import Header from './Header'
import Tasks from './Tasks'

function App() {
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
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
