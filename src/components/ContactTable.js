import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ContactTable = ({ contacts, onEdit, onDelete }) => {

  return (
    <Table >
      <TableHead sx={{  backgroundColor: '#f5f5f5' }}>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Company</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Job Title</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.firstName}</TableCell>
            <TableCell>{contact.lastName}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phoneNumber}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>{contact.jobTitle}</TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(contact)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDelete(contact.id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactTable;
