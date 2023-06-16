import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    if (name && phone) {
      onAddContact(name, phone);
      setName('');
      setPhone('');
    }
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FloatingLabel controlId="floatingInput" label="Name">
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="name"
          style={{ width: '50%' }}/>
      </FloatingLabel>
      <PhoneInput
        placeholder="Mobile number"
        value={phone}
        onChange={setPhone}
        international={true}
        countryCallingCodeEditable={false}
        defaultCountry="PH"
        aria-label="mobile"/>
      <Button type="submit" variant="primary">
        Add Contact
      </Button>{' '}
    </Form>
  );
};

export default ContactForm;
