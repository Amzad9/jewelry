import { AuthState, AuthResponse } from './authType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login } from './authThunks';

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
    success: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthStatus: (state) => {
            state.status = 'idle'
            state.error = null;
            state.success = null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        // Common status handling
        const handlePending = (state: AuthState) => {
            state.status = 'loading';
            state.error = null;
            state.success = null;
        };

        const handleRejected = (state: AuthState, action: PayloadAction<unknown>) => {
            state.status = 'failed';
            state.error = action.payload as string;
        };

        // Login
        builder.addCase(login.pending, handlePending);
        builder.addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.status = 'succeeded';
            sessionStorage.setItem('token', action.payload.token);
        });
        builder.addCase(login.rejected, handleRejected);

        // Signup
        // builder.addCase(signup.pending, handlePending);
        // builder.addCase(signup.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        //     state.user = action.payload.user;
        //     state.token = action.payload.token;
        //     state.status = 'succeeded';
        //     state.success = 'Registration successful!';
        //     localStorage.setItem('token', action.payload.token);
        // });
        // builder.addCase(signup.rejected, handleRejected);
    },
});

export const { resetAuthStatus, logout } = authSlice.actions;
export default authSlice.reducer;