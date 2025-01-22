import { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
    const initialData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
    const [credentials, setCredentials] = useState(initialData);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((credentials) => ({
            ...credentials,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = onRegister(credentials);
            setCredentials(initialData);
            setMessage(response.message || 'Usuario creado');
        } catch (error) {
            setMessage(error.response?.message || 'Registro fallido');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='box'>
                <h2 className='title is-4'>Register</h2>
                <div className='field'>
                    <label className='label'>Nombre:</label>
                    <input
                        name='firstName'
                        type='text'
                        className='input'
                        value={credentials.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='field'>
                    <label className='label'>Apellido:</label>
                    <input
                        name='lastName'
                        type='text'
                        className='input'
                        value={credentials.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='field'>
                    <label className='label'>Email:</label>
                    <input
                        name='email'
                        type='text'
                        className='input'
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='field'>
                    <label className='label'>Contraseña:</label>
                    <input
                        name='email'
                        type='text'
                        className='input'
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='field'>
                    <div className='control'>
                        <button className='button is-primary' type='submit'>Registrarse</button>
                    </div>
                </div>
                {message && <h1 className='has-text-primary'>{message}</h1>}
            </form>
        </div>
    );
}

export default RegisterForm;