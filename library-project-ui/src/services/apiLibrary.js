import axios from 'axios';

const VITE_API_LIBRARY_BASE_URL = import.meta.env.VITE_API_LIBRARY_BASE_URL;

const getAuthToken = () => localStorage.getItem('authToken');

const authHeaders = () => {
    const token = getAuthToken();
    console.log(token);
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const getBooks = async () => {
    const response = await axios.get(`${VITE_API_LIBRARY_BASE_URL}`);
    return response.data;
};

const createBook = async (book) => {
    const response = await axios.post(API_BOOKS_BASE_URL, book, {
        headers: authHeaders(),
    });
    return response.data;
};

const updateBook = async (book) => {
    const response = await axios.patch(`${API_BOOKS_BASE_URL}/${book.isbn}`, book, {
        headers: authHeaders(),
    });
    return response.data;
};

const deleteBook = async (isbn) => {
    const response = await axios.delete(`${VITE_API_LIBRARY_BASE_URL}/${isbn}`, {
        headers: authHeaders(),
    });
    return response.data;
};

const getFilteredBooks = async (filters) => {
    const query = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_BOOKS_BASE_URL}/search?${query}`);
    return response.data;
};
  
const getStatsBooks = async () => {
    const response = await axios.get(`${API_BOOKS_BASE_URL}/stats`, {
        headers: authHeaders(),
    });
    return response.data;
};

export { getBooks, createBook, updateBook, deleteBook, getFilteredBooks, getStatsBooks };