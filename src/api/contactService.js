import axios from 'axios';
import { useErrorHandler } from '../utilities/errorContext'

const API_URL = 'http://localhost:3001/contacts';

const useApi = () => {
    const handleError = useErrorHandler();
const getContacts = async() =>{
    try {
        const response =await axios.get(API_URL);
        return response;
      } catch (error) {
        handleError(error);
      }
};

const createContact = async (contact) =>{
    try {
        const response =await axios.post(API_URL, contact);
        return response;
      } catch (error) {
        handleError(error);
      }
}; 

const updateContact = async (id, contact) => {
    try {
        const response =await axios.put(`${API_URL}/${id}`, contact);
        return response;
      } catch (error) {
        handleError(error);
      }
};

const deleteContact = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response;
      } catch (error) {
        handleError(error);
      }
};

const searchContacts = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search?query=${query}`);;
        return response;
      } catch (error) {
        handleError(error);
      }
};
return { getContacts, createContact, updateContact, deleteContact, searchContacts };

}
export default useApi;
