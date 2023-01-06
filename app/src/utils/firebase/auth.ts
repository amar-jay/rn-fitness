import {
  createUserWithEmailAndPassword as firebaseEmailAuth,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  User,
  GoogleAuthProvider as FirebaseGoogleAuth,
  initializeAuth,
  signInWithCredential,
  getAuth,
  getReactNativePersistence,
  FacebookAuthProvider
} from "firebase/auth/react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { Email } from "types";
import { atom } from "jotai";
import { firebaseApp } from "./init";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FACEBOOK_CLIENT_ID } from "../auth/facebook";
import { useEffect } from "react";

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
    // .then(userCredential => {
    //   return atom(userCredential);
    // })
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
      //const user = userCredential.user;
      //const [, setUser] = useAtom(authAtom);
      //setUser(user);
      console.log("userCredential", userCredential);
      return;
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

export const FacebookAuthHook = () => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: FACEBOOK_CLIENT_ID
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      const credential = (provider as any).credential(access_token);
      // Sign in with the credential from the Facebook user.
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return {
    request,
    promptAsync
  };
};
