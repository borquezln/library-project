import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header className='header'>
                <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
                    <div className='navbar-menu is-flex is-justify-content-center'>
                        <Link to='/' className='navbar-item'>Home</Link>
                        <Link to='/books' className='navbar-item'>Books</Link>
                        <Link to='/stats' className='navbar-item'>Estadísticas</Link>
                        <Link to='/users' className='navbar-item'>Usuarios</Link>
                    </div>
                </nav>
            </header>

            <main className='main section'>
                <div className='container'>
                    {children}
                </div>
            </main>

            <footer className='footer has-background-primary has-text-black'>
                <div className='content has-text-centered'>
                    <p>Sitio desarrollado por <a href='https://github.com/borquezln' target='_blank' className='has-text-white'>@borquezln</a></p>
                    <p>Tecnologías: NodeJS - MongoDB - Express - React - Bulma</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;