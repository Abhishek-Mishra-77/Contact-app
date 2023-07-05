import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api/contacts';
import { all } from 'axios';


const EditContact = (props) => {

    const {id} = useParams();


    // UseState for name and Email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    // This is onSubmit event for submiting the form then it get update
    const OnUpdateHandler = (event) => {
        event.preventDefault();
        if (name === '' || email === '') {
            alert('All the fields are mandatory');
            return;
        }

        props.updatContactHandler({ name, email } , id);
        setName('')
        setEmail('')
    }


    return (
        <div className='ui main' >
            <form onSubmit={OnUpdateHandler} className='ui form' style={{ marginTop: '77px' }}>
                <h2>Edit Contact</h2>
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
                <button className='ui button blue'>Edit</button>

                <Link to='/'>
                    <button className='ui button blue' style={{ float: 'right' }}>Back</button>
                </Link>

            </form>

        </div>
    )
}

export default EditContact;