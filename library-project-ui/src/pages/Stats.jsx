import { getStatsBooks } from '../services/apiLibrary.js'
import Layout from '../components/Layout.jsx'
import { useEffect, useState } from 'react'

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [logged, setLogged] = useState(false);

    const fetchStats = async () => {
        try {
            const dataStats = await getStatsBooks();
            setStats(dataStats);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchStats();
        const token = localStorage.getItem('authToken');
        setLogged(!!token);
    }, [])

    return (
        <Layout>
            <section className='section'>
                <div className='container'>
                    <h1 className='title is-4'>Estadísticas de tus libros</h1>
                        {
                            stats && stats.length > 0 ?
                            (
                                stats.map((stat, index) => (
                                    <div key={index} className='box'>
                                        <p><strong>Cantidad de libros: {stat.count}</strong></p>
                                        <p><strong>Libro más caro: {stat.maxPrice}</strong></p>
                                        <p><strong>Libro más barato: {stat.minPrice}</strong></p>
                                        <p><strong>Precio promedio: ${stat.avgPrice.toFixed(2)}</strong></p>
                                    </div>
                                ))
                            ) : <p>No hay información disponible</p>
                        }
                        {!logged && ( <p>No hay una sesión iniciada</p> )}
                </div>
            </section>
        </Layout>
    )
}

export default Stats;