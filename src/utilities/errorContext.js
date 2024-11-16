import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

// Create the context
const ErrorContext = createContext();

// Custom hook to use the error context
export const useErrorHandler = () => useContext(ErrorContext);

// Error handler function
const handleError = (error) => {
  console.error('API Error:', error.response.data.error);

  // Display a toast message for the error
  toast.error(error?.response?.data?.error || 'An unexpected error occurred!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
  });
};

// ErrorContext Provider Component
export const ErrorProvider = ({ children }) => (
  <ErrorContext.Provider value={handleError}>
    {children}
  </ErrorContext.Provider>
);
