import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="transparent" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Ian Gervacio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutMe">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
