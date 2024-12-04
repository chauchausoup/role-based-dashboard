import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
    email: string;
    role: 'admin' | 'user';
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem('auth', JSON.stringify(action.payload)); 
        },
        logout: state => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('auth')
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
