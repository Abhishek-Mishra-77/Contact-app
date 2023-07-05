import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {


    // Rendering Contacts list items
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact}></ContactCard>
        )
    })

  

    const myStyle = {
        marginTop : '70px',
        padding: '20px 16px 30px 16px',
        backgroundColor: ' white',
        width: '100%',
        maxWidth: '700px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
        borderRadius : '12px'
    };


    return (
        <div className='ui' style={myStyle}>
            <h1>Contact List
                <Link to="/add">
                    <button className='ui button blue right' style={{ marginLeft: '30px' }}>Add Contact</button>
                </Link>
            </h1>
            {renderContactList}
        </div>
    )
}

export default ContactList;