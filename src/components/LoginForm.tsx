import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {login} from '@/feature/authSlice';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mockCredentials = {
        admin: {email: 'admin@example.com', password: 'adminPass123', role: 'admin'},
        user: {email: 'user@example.com', password: 'userPass123', role: 'user'},
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === mockCredentials.admin.email && password === mockCredentials.admin.password) {
            dispatch(login({email, role: 'admin'}));
            navigate('/dashboard');
        } else if (email === mockCredentials.user.email && password === mockCredentials.user.password) {
            dispatch(login({email, role: 'user'}));
            navigate('/dashboard');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
