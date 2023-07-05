import React, { useState } from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
   const { id, name, email } = props.contact;


   return (
      <div className='item' style={{ marginTop: '20px', display: 'flex' }}>

         <img className='ui avatar image' src={user} alt='user' />

         <div className='content'>
            <div key={id}> </div>

            <Link to={`/contact/${id}`}>
               <div className='header'>{name}</div>
               <div>{email}</div>
            </Link>


         </div>
         <Link to={`/edit/${id}`}>
            <i className='edit alternate outline icon' style={{ color: 'blue', marginTop: '7px', marginLeft: '77px' }}></i>
         </Link>

         <Link to={`/contact/remove/${id}`}>
            <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7px', marginLeft: '77px' }}></i>
         </Link>

      </div>
   )
}

export default ContactCard;

