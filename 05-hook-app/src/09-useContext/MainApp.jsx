import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AbaoutPage';
import { LoginPage } from './pages/LoginPage';

export const MainApp = () => {


    return (
        <section>
            <h2>useContext</h2>

            <div className="d-flex gap-5">
                <h5>Main app</h5>
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
