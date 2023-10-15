import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSession } from "../db";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./TabNavigador";

const MainNavigator = () => {
    const dispatch = useDispatch();
    const { user, localId } = useSelector((state) => state.auth);
    console.log(localId);
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
