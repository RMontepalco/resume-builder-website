// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Sign Up
const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
	// Prevent the website from reloading when submit button is pressed.
	e.preventDefault();

	// Get user email and password
	const email = signup['signup-email'].value;
	const password = signup['signup-password'].value;

	// DELETE for later
	console.log(email, password);

	// Sign up the user
	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
	    // Store account to database
	    console.log(userCredential);
	    const user = userCredential.user;
	    // ...
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    console.log(errorCode);
	    console.log(errorMessage);
	    // ..
	  });
});