import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
    baseUrl: "https://worktracker-native-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyB_0jjmifA8URg3GceX3PVYfLjBUYqGNeg",
    authDomain: "worktracker-native.firebaseapp.com",
    projectId: "worktracker-native",
    storageBucket: "worktracker-native.appspot.com",
    messagingSenderId: "1000255221695",
    appId: "1:1000255221695:web:2c2ccdcb3260bd79d1bb0a",
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const firestore = getFirestore(FIREBASE_APP);
