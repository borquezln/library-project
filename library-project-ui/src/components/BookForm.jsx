import { useState } from "react";

const BookForm = ({ onSubmit }) => {
    const initialFormData = {
        title: '',
        author: '',
        isbn: '',
        price: 0,
        stock: 0,
        genre: '',
        publishedYear: 0,
        publisher: '',
        observations: '',
        description: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]:
                name === 'price' || name === 'stock' || name === 'publishedYear' ?
                    Number(value) : value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData(initialFormData);
    };
    
    return (
        <form onSubmit={ handleSubmit } className="box">
            <div className="field">
                <label className="label">Título</label>
                <div className="control">
                    <input
                        name="title"
                        type="text"
                        className="input"
                        placeholder="Escribe el título del libro"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label className="label">Autor</label>
                <div className="control">
                    <input
                        name="author"
                        type="text"
                        className="input"
                        placeholder="Escribe el autor del libro"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label className="label">ISBN</label>
                <div className="control">
                    <input
                        name="isbn"
                        type="text"
                        className="input"
                        placeholder="Escribe el ISBN del libro"
                        value={formData.isbn}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label className="label">Precio</label>
                <div className="control">
                    <input
                        name="price"
                        type="number"
                        className="input"
                        placeholder="Escribe el precio del libro"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        min='0'
                    />
                </div>
                <label className="label">Existencias</label>
                <div className="control">
                    <input
                        name="stock"
                        type="number"
                        className="input"
                        placeholder="Escribe la cantidad de libros en stock"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                        min='0'
                    />
                </div>
                <label className="label">Género</label>
                <div className="control">
                    <input
                        name="genre"
                        type="text"
                        className="input"
                        placeholder="Escribe el género del libro"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>
                <label className="label">Año de publicación</label>
                <div className="control">
                    <input
                        name="publishedYear"
                        type="number"
                        className="input"
                        placeholder="Escribe el año de publicación del libro"
                        value={formData.publishedYear}
                        onChange={handleChange}
                    />
                </div>
                <label className="label">Editorial</label>
                <div className="control">
                    <input
                        name="publisher"
                        type="text"
                        className="input"
                        placeholder="Escribe la editorial del libro"
                        value={formData.publisher}
                        onChange={handleChange}
                    />
                </div>
                <label className="label">Observaciones</label>
                <div className="control">
                    <textarea
                        name="observations"
                        className="textarea"
                        placeholder="Escribe observaciones sobre el libro"
                        value={formData.observations}
                        onChange={handleChange}
                    />
                </div>
                <label className="label">Descripción</label>
                <div className="control">
                    <textarea
                        name="description"
                        className="textarea"
                        placeholder="Escribe la descripción del libro"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type="submit" className="button is-primary">Guardar</button>
                </div>
            </div>
        </form>
    )
}

export default BookForm;