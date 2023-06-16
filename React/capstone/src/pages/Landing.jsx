import React from 'react';
import { useState } from 'react';
import 'react-phone-number-input/style.css';
import RegistrationForm from '../components/RegistrationForm';
//import { GoogleLogin } from 'react-google-login';

import {FaPiggyBank, FaCloudDownloadAlt, FaMobileAlt} from 'react-icons/fa';
import {Button, Modal, FloatingLabel, Form, Col, Row, InputGroup} from 'react-bootstrap';

export default function Landing() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/*<!-- Page heading-->*/}
                            <h1 className="mb-5">Send unlimited Text Message anytime, anywhere!</h1>
                            {/*<!-- Signup form-->*/}
                            <Button variant="primary" onClick={handleShow}>Send a text message now</Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Sign up for an account</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <RegistrationForm/>
                                </Modal.Body>
                            </Modal>  
                        </div>
                    </div>
                </div>
            </div>
        </header>
            {/*<!-- Icons Grid-->*/}
            <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="m-auto text-primary"><FaPiggyBank/></i></div>
                                <h3>Save a few bucks</h3>
                                <p className="lead mb-0">Leave the texting cost to us. Yay savings!</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="m-auto text-primary"><FaCloudDownloadAlt/></i></div>
                                <h3>You're backed up</h3>
                                <p className="lead mb-0">Your inbox is now online</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="m-auto text-primary"><FaMobileAlt/></i></div>
                                <h3>Easy to Use</h3>
                                <p className="lead mb-0">With it's user-friendly interface, it doesn't feel as different from your mobile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Call to Action-->*/}
            <section className="call-to-action text-white text-center" id="signup">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                            <Button variant="primary" onClick={handleShow}>Send a text message now</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}