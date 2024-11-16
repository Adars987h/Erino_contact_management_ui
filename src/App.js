import React, { useState, useEffect } from 'react';
import contactService from './api/contactService';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import { Button } from '@mui/material';
import useApi from './api/contactService';
import './App.css';

function App() {
  const { getContacts, searchContacts, createContact, updateContact, deleteContact } = useApi();
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchContacts = async () => {
    const response = await getContacts();
    setContacts(response.data);
  };

  const handleSearch = async (query) => {
    if (query) {
      const response = await searchContacts(query);
      setContacts(response.data);
    } else {
      fetchContacts();
    }
  };

  const handleSave = async (contact) => {
    if (selectedContact) await updateContact(selectedContact.id, contact);
    else await createContact(contact);
    fetchContacts();
    setModalOpen(false);
    setSelectedContact(null);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  const handleAddContactClick = () => {
    setSelectedContact(null); 
    setModalOpen(true);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: '20px'}}>
      <h1 style={{ textAlign: 'center' }}>Erino Contact Management</h1>
      <div className='top_div'><SearchBar id='searchbar' style={{ padding: '200px' }} onSearch={handleSearch} />
      <Button style={{height:'55px'}} variant="contained" color="primary" onClick={handleAddContactClick}>
        Add Contact
      </Button> </div>
      
      <ContactTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <ContactForm onSave={handleSave} selectedContact={selectedContact} />
      </Modal>
    </div>
  );
}

export default App;
