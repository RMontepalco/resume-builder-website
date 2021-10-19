// DOM elements
const guideList = document.querySelector('#resumes');
let html = '';

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