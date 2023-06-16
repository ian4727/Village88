import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import List from './components/List';

function App() {
    const [contacts, setContacts] = useState([]);

    return(
        <div className='App'>
            <ContactForm setContacts={setContacts}/>
            <List contacts={contacts}/>
        </div>
    )
}

export default App
