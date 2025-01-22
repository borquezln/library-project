import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const initialData = {
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
            const response = await onLogin(credentials)
            const token = response.token;
            if (token) {
                localStorage.setItem('authToken', token);
                setMessage('Inicio de sesión correcto');
                setCredentials(initialData);
            } else {
                setMessage('Inicio de sesión fallido: No se recibió token.');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Inicio de sesión fallido.');
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='box'>
                <h2 className='title is-4'>Login</h2>
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
                        name='password'
                        type='password'
                        className='input'
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='field'>
                    <div className='control'>
                        <button className='button is-primary' type='submit'>Login</button>
                    </div>
                </div>
                {message && <h1 className='has-text-primary'>{message}</h1>}
            </form>
        </div>
    );
}

export default LoginForm;