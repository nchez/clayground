
import { initializeApp } from "firebase/app";
import { Auth, browserSessionPersistence, getAuth, setPersistence, signInWithCredential, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2eEJNxTgwF-Ko_v88f8kmxwbuaNOpvmE",
    authDomain: "clayground-9ea69.firebaseapp.com",
    projectId: "clayground-9ea69",
    storageBucket: "clayground-9ea69.appspot.com",
    messagingSenderId: "1019639455266",
    appId: "1:1019639455266:web:d97155987d3a95d4f2747b",
    measurementId: "G-KK5E60K6X5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth();
setPersistence(auth, browserSessionPersistence)

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});


export const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth)

