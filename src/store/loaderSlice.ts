import { createSlice } from '@reduxjs/toolkit';
interface Loader { loading: boolean }
const initialState: Loader = {
    loading: false,
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        startLoading(state: Loader) {
            state.loading = true;
        },
        stopLoading(state: Loader) {
            state.loading = false;
        },
    },
});

export const { startLoading, stopLoading } = loaderSlice.actions;

export default loaderSlice.reducer;