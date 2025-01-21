import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import BookForm from '../components/BookForm';
import { getBooks, getBook, createBook, updateBook, deleteBook } from '../services/apiLibrary';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [showAddBook, setShowAddBook] = useState(false);

    const fetchBooks = async () => {
        try {
            const books = await getBooks();
            setBooks(books);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreate = async (book) => {
        try {
            await createBook(book);
            fetchBooks();
            setShowAddBook(false);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (isbn) => {
        try {
            if (window.confirm('¿Estás seguro de eliminar este libro?'))
                await deleteBook(isbn);
            fetchBooks();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <Layout>
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>Libros</h1>
                    <button className='button is-primary mb-5' onClick={() => {
                        setShowAddBook(!showAddBook);
                    }}>
                        {showAddBook ? 'Cancelar' : 'Agregar libro'}
                    </button>
                    {
                        showAddBook && <BookForm onSubmit={handleCreate} />
                    }
                    <div className='columns is-multiline'>
                        {
                            books.map(book => {
                                return (
                                    <div className='column is-one-quarter' key={book.isbn}>
                                        <BookCard book={book} onDelete={handleDelete} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Books;
