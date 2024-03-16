import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    user: null,
    isAuthenticated: false
};

// Create slice
const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
        register(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
    },
});

// Export actions and reducer
export const { login, logout, register } = authenticationSlice.actions;
export default authenticationSlice.reducer;
