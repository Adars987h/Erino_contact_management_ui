import React from 'react';
import '../App.css';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const Modal = ({ open, onClose, children }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle >{children.props.selectedContact ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export default Modal;
