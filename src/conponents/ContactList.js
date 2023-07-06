import React, { useRef } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {

    const inputElement = useRef('');


    // Rendering Contacts list items
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact}></ContactCard>
        )
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputElement.current.value);
      
    }


    const myStyle = {
        marginTop: '70px',
        padding: '20px 16px 30px 16px',
        backgroundColor: ' white',
        width: '100%',
        maxWidth: '700px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
        borderRadius: '12px'
    };


    return (
        <div className='main' style={myStyle}>
            <h1>Contact List
                <Link to="/add">
                    <button
                        className='ui button blue right'
                        style={{ marginLeft: '30px' }}>Add Contact</button>
                </Link>
            </h1>



            <div className='ui search'>
                <div className='ui icon input' style={{ width: '300px' }}>
                    <input
                        ref={inputElement}
                        type='text'
                        placeholder='Search Contacts'
                        value={props.searchTerm}
                        onChange={getSearchTerm}
                        className='propmt' />
                    <i className='search icon' ></i>
                </div>
            </div>

            <div className='ui celled list'> {renderContactList.length > 0 ? renderContactList : "No Contacts availble"}</div>
        </div>
    )
}

export default ContactList;