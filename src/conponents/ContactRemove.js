import React, { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import user from '../images/user.png';
import api from '../api/contacts';



const ContactRemove = (props) => {

    const { id } = useParams();
    console.log(id)
    const [contact, setContact] = useState({});

    // getting all data from axios 
    const retrieveContacts = async () => {
        const response = await api.get("http://localhost:3006/contacts");
        return response.data;
    }



    // removing the Contact from contact list using axios
    const removeContactHandler = async () => {
        await api.delete(`http://localhost:3006/contacts/${id}`)
        window.location.replace('/')
    }



    // Filter Contact which contact we click we will get that data into the card form
    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrieveContacts();
            if (allContacts) {
                setContact(allContacts.filter((contact) => contact.id == id)[0])
            }
        }
        getAllContacts()
    }, [])




    const mystyle = {
        marginTop: '120px'
    }




    return (
        <div className="ui cards centered" style={mystyle}>
            <div className="card ">
                <div className="content">
                    <img className="right floated mini ui image" src={user} />
                    <div className="header">
                        {contact.name}
                    </div>
                    <div className="meta">
                        {contact.email}
                    </div>
                    <div className="description">
                        Are you sure you want to delete this contact
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui basic green button" onClick={removeContactHandler}>Approve</button>
                        <Link to="/">
                            <div className="ui basic red button">Decline</div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ContactRemove;