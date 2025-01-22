import Layout from '../components/Layout'
import { loginUser, registerUser } from '../services/apiUsers'
import RegisterForm from '../components/RegisterForm.jsx'
import LoginForm from '../components/LoginForm.jsx'
import LogoutButton from '../components/LogoutButton.jsx'

const User = () => {
    const handleRegister = async (userData) => {
        try {
            await registerUser(userData);
        } catch (error) {
            console.log('Error en el registro:', error);
        }
    }

    const handleLogin = async (userData) => {
        try {
            const datos = await loginUser(userData);
            return datos;
        } catch (error) {
            console.log('Error iniciando sesión:', error);
        }
    }

    return (
        <Layout>
            <section className='section'>
                <div className='container'>
                    <h1 className='title '>Administración de usuarios</h1>
                </div>
                <div className='container'>
                    <RegisterForm onRegister={handleRegister} />
                </div>
                <div className='container'>
                    <LoginForm onLogin={handleLogin} />
                </div>
                <div className='container'>
                    <LogoutButton />
                </div>
            </section>
        </Layout>
    )
}

export default User;