import { Routes, Route, Navigate, Link } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AbaoutPage';
import { LoginPage } from './pages/LoginPage';

export const MainApp = () => {
    return (
        <section>
            <h2>Main app</h2>

            <div className="d-flex gap-3">
                <Link to='/' className='text-decoration-none'><h5>Home</h5></Link>
                <Link to='/about' className='text-decoration-none'><h5>About</h5></Link>
                <Link to='/login' className='text-decoration-none'><h5>Login</h5></Link>
            </div>

            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </section>
    )
}
