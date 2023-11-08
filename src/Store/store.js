import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../reducers/itemReducer";
import monthReducer from "../reducers/monthReducer";
import authSlice from "../components/features/auth/authSlice";
import detailsReducer from "../reducers/detailReducer";
import { authApi } from "../services/authApi";

const store = configureStore({
    reducer: {
        auth: authSlice,
        details: detailsReducer,
        items: itemReducer,
        month: monthReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware,),
});

export default store;
