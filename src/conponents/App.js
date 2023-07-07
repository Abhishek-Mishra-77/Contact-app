import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import api from '../api/contacts';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import ContactRemove from './ContactRemove';
import EditContact from './EditContact';

function App() {

  // UseState for render contact list
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchterm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  // Getting data from axios 
  const retrieveContacts = async () => {
    const response = await api.get("http://localhost:3006/contacts");
    return response.data;
  }




  // Posting data from in axios  
  const addContactHandler = async (contact) => {
    const requests = {
      id: Math.random().toString(),
      ...contact
    }
    const response = await api.post('http://localhost:3006/contacts', requests)
    setContacts((contacts) => {
      const newItems = [...contacts, response.data];
      console.log(newItems)
      return newItems;
    });
  }






  // This function main work is to Edit the Contact List
  const updatContactHandler = async (contact, id) => {
    const response = await api.put(`http://localhost:3006/contacts/${id}`, contact);
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact;
    }))
  }





  // Through useEffect we are storing the data into the localeStorage now axios get response
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        setContacts(allContacts)
      }
    }
    getAllContacts();
  }, [])




  // This function use to when we search contact then this will give use filter contact 
  const searchHandler = (searchTerm) => {
    setSearchterm(searchTerm);

    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      });
      setSearchResults(newContactList)
    }
    else {
      setSearchResults(contacts);
    }

  }


  const myStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }




  return (
    <div className='ui container' style={myStyle} >
      <Router>
        <Header />
        <Routes>

          <Route path='/add'
            element={<AddContact
              addContactHandler={addContactHandler} />}>
          </Route>

          <Route path='/edit/:id'
            element={<EditContact
              updatContactHandler={updatContactHandler} />}>
          </Route>

          <Route path='/'
            element={<ContactList
              contacts={ searchTerm.length < 1 ? contacts : searchResults}
              searchTerm={searchTerm}
              searchKeyword={searchHandler}
            />}></Route>

          <Route
            path='/contact/:id'
            element={<ContactDetail />}>
          </Route>

          <Route
            path='/contact/remove/:id'
            element={<ContactRemove />}>
          </Route>


        </Routes>
      </Router>
    </div >
  );
}

export default App;
