import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => (
  <TextField style={{ paddingRight: '10px'}}
    placeholder="Search contacts..."
    onChange={(e) => onSearch(e.target.value)}
    fullWidth
  />
);

export default SearchBar;
