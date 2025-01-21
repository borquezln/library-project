import axios from 'axios';

const VITE_API_LIBRARY_BASE_URL = import.meta.env.VITE_API_LIBRARY_BASE_URL;

const getBooks = async () => {
    const response = await axios.get(`${VITE_API_LIBRARY_BASE_URL}`);
    return response.data;
};

const getBook = async (isbn) => {
    const response = await axios.delete(`${VITE_API_LIBRARY_BASE_URL}/${isbn}`);
    return response.data;
};

const createBook = async (book) => {
    const response = await axios.post(`${VITE_API_LIBRARY_BASE_URL}`, book);
    return response.data;
};

const updateBook = async (book) => {
    const response = await axios.put(`${VITE_API_LIBRARY_BASE_URL}/${book.isbn}`, book);
    return response.data;
};

const deleteBook = async (isbn) => {
    const response = await axios.delete(`${VITE_API_LIBRARY_BASE_URL}/${isbn}`);
    return response.data;
};

export { getBooks, getBook, createBook, updateBook, deleteBook };
