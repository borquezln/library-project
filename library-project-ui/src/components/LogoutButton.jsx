import { useState, useEffect } from 'react';

const LogoutButton = () => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setLogged(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setLogged(false);
        alert('Sesión cerrada');
    };

    return (
        <div className='container'>
            {logged && ( <button className='button is-danger' onClick={handleLogout}>Logout</button> )}
        </div>
    );
}

export default LogoutButton;