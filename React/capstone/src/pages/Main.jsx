import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import {Button, Modal, InputGroup, Form, Container, Row, Col, ListGroup, Tab} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

function Main(){
    const [contacts, setContacts] = useState([]);
    const [recipient, setRecipient] = useState('');
    const [text, setText] = useState({recipient: '', message: ''});
    const [show, setShow] = useState(false);
    const [messages, setMessages] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectContact = (index) => {
        const selectedContact = contacts[index];
        setText({ ...text, recipient: selectedContact.phone });
    };

    function sendText() {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const timeStamp = new Date().getTime();
        const newMessage = `${text.message} (${date} ${time} (${timeStamp}))`;
        const messages = JSON.parse(localStorage.getItem('messages')) || {};
        messages[text.recipient] = [...(messages[text.recipient] || []), newMessage];
        localStorage.setItem('messages', JSON.stringify(messages));
        setMessages(messages);

        fetch(`http://localhost:2323/send-text?recipient=${text.recipient}&message=${text.message}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recipient: text.recipient, message: text.message })
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('Error sending text message.');
        }
        return response.json();
        })
        .then(data => console.log(data))
        .catch(err => console.error(err));

        setMessages(prev => ({
            ...prev,
            [recipient]: (prev[recipient] || []).concat(text.message)
        }));

            setText({ recipient: '', message: '' });
        }

    const onAddContact = (name, phone) => {
        if(name === '' || phone === ''){
            return;
        }
        setContacts((prev) => [...prev, {name, phone}]);
    }

    const onSelectContact = (phone) => {
        setRecipient(phone);
    };

    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('messages')) || {};
        setMessages(messages);
    }, []);

    return(
        <Container className="mt-5 main" fluid >
            <Tab.Container id="list-group-tabs-example">
                <Row>
                    <Col sm={4}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Contacts"
                                className="me-2 search"
                                aria-label="Search"/>
                                <Button className="search" variant="outline-primary">Search</Button>
                            </Form>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add a contact</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ContactForm onAddContact={onAddContact} />
                            </Modal.Body>
                        </Modal>
                        <ListGroup className="contact-list mt-3">
                            {contacts.map((contact, index) => (
                                <ListGroup.Item key={index} action href={`#${index}`} onClick={() => selectContact(index)}>
                                    <div>{contact.name}</div>
                                    <div className="text-muted d-block">{contact.phone}</div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Button className="mt-3" variant="primary" onClick={handleShow}>Add a Contact</Button>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content className="message-history">
                           {Object.entries(messages).length > 0 ? (
              Object.entries(messages).map(([recipient, messages]) => (
                <Tab.Pane key={recipient} eventKey={`#${recipient}`}>
                  {messages.map((message) => (
                    <div key={message.timestamp}>
                      {message.text} ({message.timestamp})
                    </div>
                  ))}
                </Tab.Pane>
              ))
            ) : (
              <Tab.Pane eventKey="#no-messages">No previous messages</Tab.Pane>
            )}
                        </Tab.Content>
                        <InputGroup className="mb-3 mt-5">
                            <Form.Group>
                                <PhoneInput
                                    placeholder="Mobile number"
                                    value={text.recipient}
                                    onChange={value => setText({ ...text, recipient: value })}
                                    international={true}
                                    countryCallingCodeEditable={false}
                                    defaultCountry="PH"
                                    aria-label='mobile'/>
                            </Form.Group>
                            <InputGroup className="mb-3 mt-3">
                                <Form.Control 
                                    as="textarea"
                                    placeholder="Type your message here ..."
                                    value={text.message}
                                    aria-label="Type your message here ..."
                                    aria-describedby="basic-addon2"
                                    onChange={e => setText({ ...text, message: e.target.value })}/>
                                <Button 
                                    variant="outline-success" 
                                    id="button-addon2" 
                                    onClick={sendText}>
                                    Send
                                </Button>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
    )
}
export default Main;