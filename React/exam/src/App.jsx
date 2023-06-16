import { useState, useEffect } from 'react';
import Add from './components/Add';
import TaskList from './components/TaskList';
import './App.css';
import Card from 'react-bootstrap/Card';
import title from './assets/images/title.png';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks ? storedTasks : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.title !== taskToDelete.title);
    setTasks(updatedTasks);
  };

  const handleAddSubTask = (taskId, subTasks) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          subTasks: subTasks,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };


  return (
    <div>
      <Card className='card'>
        <Card.Img src={title} alt="Card image" />
        <Card.ImgOverlay>
        <Card.Body className='text-center'>Task Logger</Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Add onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onAddSubTask={handleAddSubTask}/>
    </div>
  );
}

export default App;
