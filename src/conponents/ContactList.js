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
        padding: '80px 16px 30px 16px'
    };


    return (
        <div className='ui celled list' style={myStyle}>
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