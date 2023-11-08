import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSession } from "../db";
import { listenAuthState } from "../components/features/auth/authSlice";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./TabNavigador";

const MainNavigator = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                console.log("Esta es la sesion", session);
                if (session.rows.length) {
                    console.log(session.rows._array[0]);
                    const user = session.rows._array[0];
                    dispatch(setUser(user));
                }
            } catch (error) {
                console.log("Error en obtener ususario", error.message);
            }
        })();
    }, []);
    return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
