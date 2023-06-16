import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import {Container, Navbar, Nav, Image, Row, Col, Modal, Button, Form, Card} from 'react-bootstrap';
import logo from '../assets/images/logo2.png';
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const [show, setShow] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const location = useLocation();
    const [user, setUser] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseSignin = () => setShowSignInModal(false);
    const handleShowSignin = () => setShowSignInModal(true);

    const navigate = useNavigate();

    useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log('Stored user:', storedUser);
    if (storedUser) {
      console.log('First name:', storedUser.firstName);
      setUser(storedUser);
    }
}, []);

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">
                        <img className="logo" src={logo} alt="Logo"/>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        {location.pathname === '/' ? (
                        <Nav.Link as={Link} to="/main">Main</Nav.Link>
                        ) : (
                        <Nav.Link as={Link} to="/">Home</Nav.Link>          
                        )}
                        </Nav>
                        <Nav className="ms-auto">
                            {location.pathname === '/' && (
                                <Nav.Link >
                                    <Button variant="primary" onClick={handleShowSignin}>
                                        Sign In
                                    </Button>
                                    <Modal show={showSignInModal} onHide={handleCloseSignin}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Sign in</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <SignIn/>
                                    </Modal.Body>
                                </Modal>
                            </Nav.Link>
                            )}
                        </Nav>
                        <Nav className="ms-auto">
                            {location.pathname === '/main' && (
                        <Nav.Link className="ml-auto">    
                            <Button variant="primary" onClick={handleShow}>
                                {user && <p>Hi {user.firstName}</p>}
                            </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Profile</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="d-flex justify-content-center align-items-center">
                                            <Card className="text-center" style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title>{user && <p>{user.firstName} {user.lastName}</p>}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{user && <p>{user.email}</p>}</Card.Subtitle>
                                                </Card.Body>
                                                <Modal.Footer>
                                        <Button variant="primary" onClick={handleSignOut}>Signout</Button>
                                        </Modal.Footer>
                                            </Card>     
                                    </Modal.Body>
                                </Modal>  
                                {location.pathname === '/' && (
                                    <Button className="landing-button" variant="primary" onClick={handleShow}>
                                        Sign In
                                    </Button>
                                )}
                        </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )   
}

