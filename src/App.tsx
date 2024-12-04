import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '@/feature/store';
import LoginPage from '@/pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from '@/components/ProtectectedRoute';

const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    </Provider>
);

export default App;
