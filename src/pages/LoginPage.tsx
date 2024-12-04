import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {login} from '@/feature/authSlice';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Mock credentials
    const mockCredentials = {
        admin: {email: 'admin@example.com', password: 'adminPass123', role: 'admin'},
        user: {email: 'user@example.com', password: 'userPass123', role: 'user'},
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (email === mockCredentials.admin.email && password === mockCredentials.admin.password) {
            dispatch(login({email, role: 'admin'}));
            if (rememberMe) localStorage.setItem('auth', JSON.stringify({email, role: 'admin'}));
            navigate('/dashboard');
        } else if (email === mockCredentials.user.email && password === mockCredentials.user.password) {
            dispatch(login({email, role: 'user'}));
            if (rememberMe) localStorage.setItem('auth', JSON.stringify({email, role: 'user'}));
            navigate('/dashboard');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.target.checked)}
                        className="w-4 h-4"
                    />
                    <Label htmlFor="rememberMe">Remember Me</Label>
                </div>

                <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
