import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from '@/feature/store';
import LoginPage from '@/pages/LoginPage';
import Dashboard from '@/pages/Dashboard';
import {login} from '@/feature/authSlice';
import {RootState} from '@/feature/store';

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
);

const AppRoutes: React.FC = () => {
    const {isAuthenticated, user} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedSession = localStorage.getItem('auth');
        if (savedSession && !user) {
            const user = JSON.parse(savedSession);
            dispatch(login(user));
        }
    }, [dispatch, user]);

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />} />
        </Routes>
    );
};

export default App;
