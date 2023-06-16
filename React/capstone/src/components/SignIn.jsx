import React, { useState } from 'react';
import {Button, Modal, FloatingLabel, Form, Col, Row, InputGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [validated, setValidated] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');
    const [emailValidationMessage, setEmailValidationMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    const handleSignIn = (e, userEmail) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem(userEmail));
        console.log('userData', userData);
        if (userData && userData.password !== null && userData.password === password) {
            setAuthenticated(true);
            navigate('/main');
            console.log('succesful');
        } else {
            if (userData === null) {
                setEmailValidationMessage('Email not found.');
            } else {
                setValidationMessage('Invalid email or password.');
            }
            console.log('fail');
        }
    };

    const handleSignOut = () => {
        setAuthenticated(false);
        navigate('/');
    };

    if (authenticated) {
        return <Header user={user} handleSignOut={handleSignOut} />;
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <Form.Control.Feedback>{emailValidationMessage}</Form.Control.Feedback>                                
                </FloatingLabel>  
            </Form.Group>
            <Form.Group controlId="validationCustom04" className="mb-4">
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <Form.Control.Feedback>{validationMessage}</Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
            <Button type="submit" onClick={(e) => handleSignIn(e, email)}>
                Sign In
            </Button>
        </Form>
    );
};
export default SignIn;
