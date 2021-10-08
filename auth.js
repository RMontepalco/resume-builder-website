// Sign Up
const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
	// Prevent the website from reloading when submit button is pressed.
	e.preventDefault();

	// Get User Info
	const email = signup['signup-email'].value;
	const password = signup['signup-password'].value;

	// Sign up the user
	console.log(email, password);

	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
	    // Signed in
	    console.log(userCredential);
	    const user = userCredential.user;
	    // ...
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    // ..
	  });

});