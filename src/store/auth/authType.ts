export interface AuthState {
    user: User | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    success: string | null;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    contact: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginCredentials {
    contact: string;
    password: string;
}

export interface SignupData {
    email: string;
    password: string;
    username?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    message: string;
}