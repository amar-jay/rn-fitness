import {
  createUserWithEmailAndPassword as firebaseEmailAuth,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  User,
  GoogleAuthProvider as FirebaseGoogleAuth,
  initializeAuth
} from "firebase/auth";
import { Email } from "types";
import { atom, useAtom } from "jotai";
import { firebaseApp } from "./init";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { authAtom } from "@/store/atoms/auth";

// Initialize Firebase Authentication and get a reference to the service
//export const auth = getAuth(firebaseApp);
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// email authentication creates a user and returns a userCredential
export const createUserWithEmailAndPasswordAtom = async (
  email: Email,
  password: string
) => {
  const userCredential = await firebaseEmailAuth(auth, email, password)
    .then(e => {
      console.log("userCredential", e);
      return e;
    })
    .then(userCredential => {
      return atom(userCredential);
    })
    .catch(error => {
      console.error(error);
      throw error;
    });

  return userCredential;
};

// sign in existing users with email and password

export const signInWithEmailAndPassword = async (
  email: Email,
  password: string
) => {
  return firebaseSignInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const [, setUser] = useAtom(authAtom);
      setUser(user);
      return authAtom;
      // ...
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

type Callback<T = void> = T extends User ? (user: T) => void : () => void;
// state observer for authentication
export const authStateObserverAtom = (
  isSignedIncallback: Callback<User>,
  isSignedOutcallback: Callback
) => {
  return auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //const _uid = user.uid;
      isSignedIncallback(user);
      // ...
    } else {
      // User is signed out
      isSignedOutcallback();
    }
  });
};

export const GoogleAuthProvider = () => {
  const provider = new FirebaseGoogleAuth();
  auth.useDeviceLanguage();
  return provider;
};
