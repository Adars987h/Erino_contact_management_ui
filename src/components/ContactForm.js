import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack,Box} from '@mui/material';

const ContactForm = ({ onSave, selectedContact }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    } else {
      setContact({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
      });
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <Stack spacing={2} paddingTop={1}>
        <Box display="flex" gap={2}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            
          />
        </Box>
        
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*',title: 'Phone Number can only be numeric.', }}
          required
        />
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={contact.company}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          {selectedContact ? 'Update' : 'Add'} Contact
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
