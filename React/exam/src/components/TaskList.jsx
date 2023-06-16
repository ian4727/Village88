import { useState, useEffect } from 'react';
import { ListGroup, Modal, Button } from 'react-bootstrap';
import SubTask from './SubTask';

function TaskList({ tasks, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [tasksWithSubTasks, setTasksWithSubTasks] = useState(tasks);

  useEffect(() => {
    const updatedTasks = tasksWithSubTasks.map((task) => {
      const storedSubTasks = JSON.parse(localStorage.getItem(`subTasks_${task.id}`));
      if (storedSubTasks) {
        task.subTasks = storedSubTasks;
      }
      return task;
    });
    setTasksWithSubTasks(updatedTasks);
  }, [tasks]);

  const handleShowModal = (task) => {
    setCurrentTask({
      ...task,
      lastUpdated: new Date().toLocaleString(),
      subTasks: task.subTasks || [] // set subTasks to an empty array if it is undefined
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTask({});
  };

  const frontEndTasks = tasks.filter((task) => task.type === 'Front-End');
  const backEndTasks = tasks.filter((task) => task.type === 'Back-End');

  const handleDelete = (task) => {
    onDelete(task);
  };

  const handleAddSubTask = (taskId, newSubTasks) => {
    setTasksWithSubTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          const updatedTask = {
            ...task,
            subTasks: newSubTasks,
          };
          localStorage.setItem(`subTasks_${task.id}`, JSON.stringify(newSubTasks));
          return updatedTask;
        }
        return task;
      });
      return updatedTasks;
    });
  };

  return (
    <div className='taskContainer'>
      <div className='tasksContainer'>
        <h2>Front-End Tasks</h2>
        {frontEndTasks.map((task) => (
          <div className='ptasks' key={task.title}>
            <ListGroup.Item className='tasks' action onClick={() => handleShowModal(task)}>
              {task.title}
            </ListGroup.Item>
  
            <Button
              onClick={() => handleDelete(task)}
              variant='outline-danger'
              size='sm'
              className='ms-2'>
              Delete
            </Button>
          </div>
        ))}
      </div>
      <div className='tasksContainer'>
        <h2>Back-End Tasks</h2>
        {backEndTasks.map((task) => (
          <div className='ptasks' key={task.title}>
            <ListGroup.Item className='tasks' action onClick={() => handleShowModal(task)}>
              {task.title}
            </ListGroup.Item>
  
            <Button
              onClick={() => handleDelete(task)}
              variant='outline-danger'
              size='sm'
              className='ms-2'
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentTask.title}
            {currentTask.lastUpdated && (
              <small className='text-muted'>
                {' '}
                (Last updated: {currentTask.lastUpdated})
              </small>
            )}
          </Modal.Title>
        </Modal.Header>
        {currentTask.subTasks && currentTask.subTasks.length > 0 && (
          <Modal.Body>
            <SubTask
              task={currentTask}
              onAddSubTask={handleAddSubTask}
            />
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TaskList;
