// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA3cDe0vijGw0h-eR1ZkEagK1Est98OE3Q",

  authDomain: "week7as8.firebaseapp.com",

  projectId: "week7as8",

  storageBucket: "week7as8.appspot.com",

  messagingSenderId: "790063844228",

  appId: "1:790063844228:web:8f6c67af827c6e12e82bd1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };