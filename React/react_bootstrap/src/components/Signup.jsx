import React, { useState } from 'react';
import {Button, Modal, Form, Card} from 'react-bootstrap';

function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
      <Card.Header as="h5">Wants to get updates?</Card.Header>
      <Card.Body>
        <Card.Title>Subscribe to our newsletter!</Card.Title>
        <Card.Text>
          By signing up, you'll get notified for events, meet-ups and new episodes via email
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
        Sign up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
      </Card.Body>
    </Card>
     
      
    </>
      
  );
}

//render(<Example />);
export default Signup;