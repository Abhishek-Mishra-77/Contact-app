import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import user from '../images/user.jpg';
import api from '../api/contacts';

const ContactDetail = (props) => {
    const { id } = useParams();
    const [contact, setContact] = useState({});
    
   
    // Getting all contact from axios 
     const retrieveContacts = async() => {
        const response = await api.get('http://localhost:3006/contacts')
        return response.data;
    } 


    useEffect(() => {
        
        const getAllContacts = async() => {
             const allContacts = await retrieveContacts();
             if(allContacts) {
                setContact(allContacts.filter((contact) => contact.id == id)[0]);
             }
        }
            getAllContacts();    
    }, [])


    const mystyle = {
        marginTop: '70px'
    }

    return (
        <div className="main" style={mystyle}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
            </div>

            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center" style={{display:'flex' , margin:"auto"}}>Back to Contact List</button>
                </Link>
            </div>

        </div>
    )
}

export default ContactDetail;