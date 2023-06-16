import {Col, Button} from 'react-bootstrap';

const Contact = ({contact}) => {
    function getInitials(name) {
        let initials = "";
        if (name) {
          const words = name.split(" ");
          for (let i = 0; i < words.length; i++) {
            const firstLetter = words[i].charAt(0).toUpperCase();
            initials += firstLetter;
          }
        }
        return initials;
      }
      

    return(
        <Col className='d-flex py-2 align-items-center' lg={8}>
            <Button as='div' className='img-placeholder'>{getInitials(contact?.name)}</Button>
            <div className='d-flex ms-3 flex-column justify-content-center'>
                <p className='mb-0'>{contact?.name}</p>
                <p className='mb-0'><a href='#'>{contact?.email}</a></p>
            </div>
        </Col>
    )
}

export default Contact;
