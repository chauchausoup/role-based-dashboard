import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@/feature/store';
import AdminDashboard from '@/components/AdminDashboard';
import UserDashboard from '@/components/UserDashboard';
import {logout} from '@/feature/authSlice';
import {useNavigate} from 'react-router-dom';

const Dashboard: React.FC = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Welcome, {user.email}</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
                Logout
            </button>
            {user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
        </div>
    );
};

export default Dashboard;
