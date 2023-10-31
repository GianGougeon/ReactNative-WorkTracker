// src/screens/LoginScreen.js
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import firebase from "../../services/firebase";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            // Navega al siguiente screen tras el login exitoso
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
