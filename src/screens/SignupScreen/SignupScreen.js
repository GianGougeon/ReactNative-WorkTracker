import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '../../services/firebase';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Signup" onPress={handleSignup} />
        </View>
    );
}

export default SignupScreen;
