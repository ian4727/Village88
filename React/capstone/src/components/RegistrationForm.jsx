import React, { useState } from "react";
import {Button, Modal, FloatingLabel, Form, Col, Row, InputGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();

        if (form.checkValidity() === false) {
           setValidated(true);
        } else {
            e.preventDefault();
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const password = formData.get('password');

            const user = {
                email,
                firstName,
                lastName,
                password,
            };

            localStorage.setItem('loggedInUser', JSON.stringify(user));
            navigate('/main');
        }
        setValidated(true);
    };

    return(
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" name="email" required/>
                </FloatingLabel>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="validationCustom02">
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                            <Form.Control type="text" placeholder="First Name" name="firstName" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="validationCustom03">
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                            <Form.Control type="text" placeholder="Last Name" name="lastName" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="validationCustom04" className="mb-4">
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" name="password" required/> 
            </FloatingLabel>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"/>
                </Form.Group>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
            <div className="text">Already have an account? <span className="signin">Signin</span></div> 
        </>
    );
};

export default RegistrationForm;
