import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navegation/StackNavigator.js";
import { View } from "react-native-web";

const App = () => {
    return (
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
    );
};

export default App;
