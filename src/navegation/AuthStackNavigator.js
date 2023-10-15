import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "../screens";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Signup">
            <AuthStack.Screen name="Signup" component={Signup} />
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
