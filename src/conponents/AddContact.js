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

    return (
        <div className='ui main' >
            <form onSubmit={OnSubmitHandler} className='ui form' style={{ marginTop: '77px' }}>
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