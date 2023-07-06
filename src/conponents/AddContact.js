import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddContact = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const OnSubmitHandler = (event) => {
        event.preventDefault();
        if (name === '' || email === '') {
            alert('All the fields are mandatory');
            return;
        }
        props.addContactHandler({ name, email });
        setName('');
        setEmail('');
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
        <div className='ui main' style={myStyle}>
            <form onSubmit={OnSubmitHandler} className='ui form' >
                <h2>Add Contact</h2>
                <div className='field'>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Name' />
                </div>

                <div className='field'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Email' />
                </div>
                <button className='ui button blue'>Add</button>

                <Link to='/'>
                    <button className='ui button blue' style={{ float: 'right' }}>Back</button>
                </Link>

            </form>

        </div>
    )
}

export default AddContact;