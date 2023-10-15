import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../reducers/itemReducer";
import authSlice from "../components/features/auth/authSlice";
import { authApi } from "../services/authApi";

const store = configureStore({
    reducer: {
        items: itemReducer,
        auth: authSlice,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
