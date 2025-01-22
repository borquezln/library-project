import { useState } from 'react';
import BookUpdateForm from './BookUpdateForm';

const BookCard = ({ book, onDelete, onUpdate }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    return (
        <div className='card is-flex is-flex-direction-column' style={{ height: '100%' }}>
            <div className='card-content' style={{ flexGrow: 1 }}>
                <p className='title'>{book.title}</p>
                <p className='subtitle'>Autor: {book.author}</p>
                <p className='mb-3'>ISNB: {book.isbn}</p>
                <p className='mb-3'>Precio: {book.price}</p>
            </div>
            <footer className='card-footer'>
                <button className='card-footer-item button is-warning' onClick={() => {
                    setShowUpdateForm(!showUpdateForm);
                }}>{showUpdateForm ? 'Cancelar' : 'Editar'}</button>
                <button className='card-footer-item button is-danger' onClick={() => onDelete(book.isbn)}>Eliminar</button>
            </footer>
            <div>
                { showUpdateForm && <BookUpdateForm onSubmit={onUpdate} book={book} /> }
            </div>
        </div>
    );
};

export default BookCard;