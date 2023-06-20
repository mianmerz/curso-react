import { Routes, Route, Navigate } from 'react-router-dom';

import { UserProvider } from './context/UserProvider';
import { HomePage, AboutPage, LoginPage } from './pages';
import { Navbar } from './components/Navbar';

export const MainApp = () => {
    return (
        <UserProvider>
            <section>
                <Navbar />

                <hr />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </section>
        </UserProvider>
    )
}
