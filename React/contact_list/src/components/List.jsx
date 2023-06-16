import Contact from './Contact';
import ListGroup from 'react-bootstrap/ListGroup';

const List = ({contacts}) => {
    return(
        <>
            <h4>CONTACTS</h4>
            {contacts && contacts.length > 0 ?
                <ListGroup>
                    <ListGroup.Item>
                        {contacts.map((contact, i) => (
                            <Contact contact={contact} key={i}/>
                    ))}
                    </ListGroup.Item>
                </ListGroup>
                : <p>No contact added yet.</p>}
        </>
        
  );
}

export default List
