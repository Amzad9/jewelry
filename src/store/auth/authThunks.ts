import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/http';
import { AxiosError } from 'axios';
import { LoginCredentials, AuthResponse } from './authType';
import { logout } from './authSlice';
import { AppDispatch } from '../store';

// login function
export const login = createAsyncThunk<
    AuthResponse,
    LoginCredentials,
    { rejectValue: string }
>('adminLogin', async (credentials, { rejectWithValue }) => {
    try {
        const response = await api.post<AuthResponse>('/adminLogin', credentials);
        return response.data;
    } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
            return rejectWithValue(err.response.data?.message || 'Login failed. Please try again.');
        }
        return rejectWithValue('An unexpected error occurred. Please try again.');
    }
});

// logout 
export const logoutUser = () => {
    return (dispatch: AppDispatch) => {
        sessionStorage.removeItem('token');
        dispatch(logout());
    };
};

// signup function
// export const signup = createAsyncThunk<
//     AuthResponse,
//     SignupData,
//     { rejectValue: string }
// >('auth/signup', async (userData, { rejectWithValue }) => {
//     try {
//         const response = await api.post<AuthResponse>('/auth/signup', userData);
//         return response.data;
//     } catch (err: unknown) {
//         if (err instanceof AxiosError && err.response) {
//             return rejectWithValue(err.response?.data?.message || 'Registration failed. Please try again.');
//         }
//         return rejectWithValue('An unexpected error occurred. Please try again.');
//     }
// });


// // reset function
// export const requestPasswordReset = createAsyncThunk(
//     'auth/requestPasswordReset',
//     async (email: string, { rejectWithValue }) => {
//         try {
//             await api.post('/auth/reset-password', { email });
//             return 'Reset instructions sent to your email';
//         } catch (err: unknown) {
//             if (err instanceof AxiosError && err.response) {
//                 return rejectWithValue(err.response?.data?.message || 'Password reset failed');
//             }
//             return rejectWithValue('An unexpected error occurred. Please try again.');
//         }
//     }
// );