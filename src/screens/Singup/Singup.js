import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "../../assets/styles/Signup.styles";

import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../components/features/auth/authSlice";

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [triggerSignup, result] = useSignUpMutation();
    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log("Login button");
        triggerSignup({
            email,
            password,
        })
            .unwrap()
            .then((result) => {
                console.log(result);
                dispatch(setUser(result));
            })
            .catch((err) => console.log(err));
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text>Sing up to start</Text>
                <TextInput
                    style={styles.inputEmail}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputEmail}
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.inputEmail}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                />
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={{ color: "white" }}>Sign up</Text>
                </Pressable>
                <Text>Already have an account?</Text>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ color: "white" }}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Signup;
