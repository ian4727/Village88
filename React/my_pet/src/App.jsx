import { useState, useEffect} from 'react'
import './App.css'
import {Form, Button, Card} from 'react-bootstrap';
import callout from './assets/images/callout.png';
import pet from './assets/images/cat.gif';

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('petName', name);
    setName('');
  }

  useEffect(() => {
    const petName = localStorage.getItem('petName');
    if(petName){
      setName(petName);
    }
  }, []);

  return (
    <div className="App">
      <Form onSubmit={handleFormSubmit}>
        <Form.Control type="name" value={name} onChange={handleNameChange}/>
        <Button type="submit" variant="warning">Name this Pet</Button>{' '}
      </Form>
      <Card className='card'>
        <Card.Img className='callout' src={callout} alt="Card image" />
          <Card.Body className='callout-text text-center'>{`Nyaaaa~ My name is ${name}`}</Card.Body>
      </Card>  
      <img className='pet' src={pet} alt=""/> 
    </div>
  )
}

export default App
