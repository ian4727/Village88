import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function SubTask({ task, onAddSubTask }) {
  const [subTask, setSubTask] = useState('');
  const [subTasks, setSubTasks] = useState(task.subTasks || []);

  const handleAddSubTask = (e) => {
    e.preventDefault();
    if (subTask !== '') {
      const newSubTasks = [...subTasks, { title: subTask, status: 'Pending' }];
      setSubTasks(newSubTasks);
      onAddSubTask(task.id, newSubTasks);
      setSubTask('');
    }
  };

  const handleSubTaskStatus = (index, status) => {
    const newSubTasks = [...subTasks];
    newSubTasks[index].status = status;
    setSubTasks(newSubTasks);
    onAddSubTask(task.id, newSubTasks);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId='subTask'>
          <Form.Control
            type='text'
            placeholder='Add sub-task'
            value={subTask}
            onChange={(e) => setSubTask(e.target.value)}
          />
        </Form.Group>
        <button className='btn btn-primary' onClick={handleAddSubTask}>
          Add Sub-Task
        </button>
      </Form>
      <hr />
      {subTasks.map((subTask, index) => (
        <div
          key={index}
          className={`sub-task ${subTask.status === 'Pending' ? 'bg-secondary' : subTask.status === 'Ongoing' ? 'bg-warning' : 'bg-success'}`}
        >
          {subTask.title}
          <div>
            <button
              className='btn btn-success'
              onClick={() => handleSubTaskStatus(index, 'Completed')}
            >
              Done
            </button>
            <button
              className='btn btn-warning'
              onClick={() => handleSubTaskStatus(index, 'Ongoing')}
            >
              Ongoing
            </button>
            <button
              className='btn btn-secondary'
              onClick={() => handleSubTaskStatus(index, 'Pending')}
            >
              Pending
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubTask;
