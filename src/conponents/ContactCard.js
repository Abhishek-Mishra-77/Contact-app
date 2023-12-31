import React, { useState } from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
   const { id, name, email } = props.contact;

   const myStyle = {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white'
   };


   return (
      <div className='item' style={myStyle} >

         <div style={{display:'flex'}}>
            <img className='ui avatar image' src={user} alt='user' />

            <div className='content'>
               <div key={id}> </div>
               <div>
                  <Link to={`/contact/${id}`}>
                     <div className='header'>{name}</div>
                     <div>{email}</div>
                  </Link>

               </div>
            </div>
         </div>
          
         <div style={{marginLeft:'auto'}}>
            <Link to={`/edit/${id}`}>
               <i className='edit alternate outline icon' style={{ color: 'blue', marginTop: '7px' }}></i>
            </Link>

            <Link to={`/contact/remove/${id}`}>
               <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7px', marginLeft: '30px' }}></i>
            </Link>
         </div>

      </div>
   )
}

export default ContactCard;

