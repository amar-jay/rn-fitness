import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./firestore";
import { storage } from "./storage";
import {
  authStateObserverAtom,
  createUserWithEmailAndPasswordAtom,
  signInWithEmailAndPasswordAtom
} from "./authentication";
// Initialize Firestore

// sample function to get a list of cities from your database
// Get a list of cities from your database
export const getCities = async () => {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
};

export {
  db,
  storage,
  authStateObserverAtom,
  createUserWithEmailAndPasswordAtom,
  signInWithEmailAndPasswordAtom
};
