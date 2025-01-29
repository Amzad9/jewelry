import { createSelector } from '@reduxjs/toolkit';
// import { AuthState } from './authType';
import type { RootState } from '../store';

const selectAuthState = (state: RootState) => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuthState],
    (auth) => auth.user
);

export const selectAuthToken = createSelector(
    [selectAuthState],
    (auth) => auth.token
);

export const selectAuthStatus = createSelector(
    [selectAuthState],
    (auth) => auth.status
);

export const selectAuthError = createSelector(
    [selectAuthState],
    (auth) => auth.error
);

export const selectAuthSuccess = createSelector(
    [selectAuthState],
    (auth) => auth.success
);

export const selectIsAuthenticated = createSelector(
    [selectAuthToken],
    (token) => !!token
);