import firebase from "firebase/app";
import firebaseConfig from "./config";

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
