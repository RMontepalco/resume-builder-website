// DOM elements
const loggedOut = document.querySelectorAll('.logged-out');
const loggedIn = document.querySelectorAll('.logged-in');
const guideList = document.querySelector('#resumes');
const accountEmail = document.querySelector('#account-email');
let html = '';

// Hide or show web elements based on authentication state
const setupUI = (user) => {
  if (user) {
    // User is logged in
    // Display user's email
    const htmlEmail = `
    <h3> Logged in as ${user.email}</h3>
    `; 
    accountEmail.innerHTML = htmlEmail;

    // Show logged in elements and hide logged out elements
    loggedIn.forEach(item => item.style.display = 'block');
    loggedOut.forEach(item => item.style.display = 'none');
  } else {
    // User is logged out
    accountEmail.innerHTML = '';
    //show logged out elements and hide logged in elements
    loggedIn.forEach(item => item.style.display = 'none');
    loggedOut.forEach(item => item.style.display = 'block');
  }
};

// Display the user's resumes onto the website (WIP)
const displayResumes = (doc) => {
  const resume = doc.data();
  const li = `
  <li>
    <h3> ${resume.firstName} ${resume.lastName} </h3>
  </li>
  `;
  html += li;
  guideList.innerHTML = html;
};

// Hide the user's resumes from the website (WIP)
const hideResumes = () => {
  guideList.innerHTML = '';
};