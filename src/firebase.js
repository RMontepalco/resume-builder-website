// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyA5f0ELYbl1Wpy1rAv0B1MHVWoYT8Ot97A",
authDomain: "resume-builder-website.firebaseapp.com",
projectId: "resume-builder-website",
storageBucket: "resume-builder-website.appspot.com",
messagingSenderId: "1064855568995",
appId: "1:1064855568995:web:b6fd5350c5e96ab665ae56",
measurementId: "G-ZMJ23R8MF1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);


// Authentication State Observer and User Data
// Track whether a user is logged in or logged out, 
// and show certain web elements depending on the status
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log('Logged in as', user.email);
    } else {
        console.log('Logged out');
    }
});


export { app, auth, db, analytics }