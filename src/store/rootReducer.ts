import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;