import Header from './Components/Header';
import Tasks from './Components/Tasks';
import {useState} from 'react';

function App() {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: "Task 11",
        day: 'Jan 20'
    },
    {
        id: 2,
        text: "Task 22",
        day: 'Jan 21'
    },
    {
        id: 3,
        text: "Task 33",
        day: 'Jan 22'
    }
]);
  return (
    <div className="container">
      <Header title = 'Ak'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
