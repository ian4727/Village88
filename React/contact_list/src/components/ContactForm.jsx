import {useState, useEffect} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ContactForm = ({setContacts}) => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);

    const onAddContact = (e) => {
        e.preventDefault();

        if(name === '' || email === ''){
            return;
        }

        setContacts((prev) => [...prev, {name, email}]);

        setName('');
        setEmail('');
    }

    useEffect(() => {
        const data = JSON.stringify({name, email});
        localStorage.setItem('contact', data);
    }, [name, email]);

    return(
        <>  
            <h1>CONTACT REGISTRATION FORM</h1>
            <form onSubmit={onAddContact}>
                <FloatingLabel controlId="floatingPassword" label="Name">
                    <Form.Control className="mb-3" type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} aria-label='name' style={{ width: '50%' }}/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label='email' style={{ width: '50%' }}/>
                </FloatingLabel>
                <Button type='submit' variant="info">Add</Button>{' '}
            </form>
            
        </>
    );   
}

export default ContactForm
