import { getStorage } from "firebase/storage";
import { firebaseApp } from "./init";

// Initialize Cloud Storage
export const storage = getStorage(firebaseApp);
