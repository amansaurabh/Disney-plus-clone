import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDodrKDNSHu_WfOQwxdtf8MNlcijtzviH4",
    authDomain: "disneyplus-clone-7e667.firebaseapp.com",
    projectId: "disneyplus-clone-7e667",
    storageBucket: "disneyplus-clone-7e667.appspot.com",
    messagingSenderId: "535016539301",
    appId: "1:535016539301:web:d396b1a94227b9232cf94c",
    measurementId: "G-6HMB539844"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;