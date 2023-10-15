import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    imageCamera: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload.email);
            return {
                user: action.payload.email,
                token: action.payload.idToken,
            };
        },
        clearUser: () => {
            return { user: null, token: null };
        },
        setCameraImage: (state, action) => {
            return {
                ...state,
                imageCamera: action.payload,
            };
        },
    },
});

export const { setUser, clearUser, setCameraImage } = authSlice.actions;

export default authSlice.reducer;
