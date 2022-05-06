import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZNJUiPfiD4GzQGwrqh916pB82HZTup0I",
    authDomain: "annapurna-78403.firebaseapp.com",
    projectId: "annapurna-78403",
    storageBucket: "annapurna-78403.appspot.com",
    messagingSenderId: "946516475390",
    appId: "1:946516475390:web:c71ae13240e3fd37df94af",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export { provider };
