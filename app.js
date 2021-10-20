// DOM elements
const loggedOut = document.querySelectorAll('.logged-out');
const loggedIn = document.querySelectorAll('.logged-in');
const guideList = document.querySelector('#resumes');
let html = '';

// Hide or show web elements based on authentication state
const setupUI = (user) => {
  if (user) {
    // User is logged in
    loggedIn.forEach(item => item.style.display = 'block');
    loggedOut.forEach(item => item.style.display = 'none');
  } else {
    // User is logged out
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