import { User } from "firebase/auth/react-native";
import { atom } from "jotai";
export const checkedAtom = atom(false);
export const isAuthAtom = atom(false);

export const authAtom = atom<User | null>(null);
