import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Add({ onAdd }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { title, type };
    onAdd(newTask);
    setTitle('');
    setType('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Task title">
        <Form.Control
          className="label"
          type="name"
          placeholder="Task title"
          value={title}
          onChange={handleTitleChange}
        />
      </FloatingLabel>
      <div className='radios'>
        <h4>Task Type</h4>
        <Form.Check
          inline
          label="Front-End"
          name="type"
          type="radio"
          id="inline-radio-2"
          value="Front-End"
          checked={type === 'Front-End'}
          onChange={handleTypeChange}
        />
        <Form.Check
          inline
          label="Back-End"
          name="type"
          type="radio"
          id="inline-radio-2"
          value="Back-End"
          checked={type === 'Back-End'}
          onChange={handleTypeChange}
        />
      </div>
      <Button variant="primary" type="submit">
        Add
      </Button>{' '}
    </Form>
  );
}

export default Add;
