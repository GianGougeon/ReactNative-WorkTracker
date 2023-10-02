import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import BottomTabNavigator from "./src/navegation/TabNavigador.js";
import store from "./src/Store/store.js";

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
