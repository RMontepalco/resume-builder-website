// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";

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
		// User is logged in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		setupUI(user);
		html = '';
		console.log('User logged in: ', user);

		// Retrive user's resumes from the database (WIP)
		const querySnapshot = await getDocs(collection(db, "resumes"));
		let i = 0;
		querySnapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data());
			displayResumes(doc);
			i++;
		});

		// User has no resumes in the database
		if (i == 0) {
			guideList.innerHTML = '<h4> You have no resumes. </h4>'
		};
	} else {
		// User is logged out
		console.log('User logged out');
		setupUI();
		hideResumes();
	}
});


// Create an Account (US 1, FR 1.1-1.4)
const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
	// Prevent the website from reloading when submit button is pressed.
	e.preventDefault();

	// Get user email and password
	const email = signup['signup-email'].value;
	const password = signup['signup-password'].value;

	// Sign up the user
	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
	    // Store account to database
	    const user = userCredential.user;
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    console.log(errorCode);
	    console.log(errorMessage);
	    // ..
	  });
});


// Log In to Account (US 2, FR 2.1-2.3)
const login = document.querySelector('#login-form');
login.addEventListener('submit', (e) => {
	// Prevent the website from reloading when submit button is pressed.
	e.preventDefault();

	// Get user email and password
	const email = login['login-email'].value;
	const password = login['login-password'].value;

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
});


// Log Out of Account (US 3, FR 3.1-3.3)
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
	// Prevent the website from reloading when logout button is pressed.
	e.preventDefault();

	signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
});