import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Book from '../pages/Books';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<Book />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;