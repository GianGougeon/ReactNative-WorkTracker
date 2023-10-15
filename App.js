import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/Store/store.js";
import MainNavigator from "./src/navegation/MainNavigator.js";
import { init } from "./src/db/index.js";
const App = () => {
    init()
        .then(() => console.log("DB initialized"))
        .catch((err) => console.log("DB failed", err.message));

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
