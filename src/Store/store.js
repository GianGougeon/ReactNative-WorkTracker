import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../reducers/itemReducer";
import monthReducer from "../reducers/monthReducer";
import authSlice from "../components/features/auth/authSlice";
import { authApi } from "../services/authApi";

const store = configureStore({
    reducer: {
        items: itemReducer,
        month: monthReducer,
        auth: authSlice,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
