import { getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "./init";

// Initialize Firestore
export const db = getFirestore(firebaseApp);
