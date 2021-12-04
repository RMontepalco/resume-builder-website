// DOM elements
const loggedOut = document.querySelectorAll('.logged-out');
const loggedIn = document.querySelectorAll('.logged-in');
const accountEmail = document.querySelector('#account-email');
const resumeList = document.querySelector('#resume-list');
const resumeCreation = document.querySelectorAll('.resume-creation');
const resumeTemplatesForm = document.querySelectorAll('#resume-templates-form');
const contactInformationForm = document.querySelectorAll('#contact-information-form');
const summaryStatementForm = document.querySelectorAll('#summary-statement-form');
const educationForm = document.querySelectorAll('#education-form');
const technicalSkillsForm = document.querySelectorAll('#technical-skills-form');
const workExperienceForm = document.querySelectorAll('#work-experience-form');
const projectExperienceForm = document.querySelectorAll('#project-experience-form');
const certificationsForm = document.querySelectorAll('#certifications-form');
const awardsForm = document.querySelectorAll('#awards-form');
const activitiesForm = document.querySelectorAll('#activities-form');
let html = '';


// Hide or show web elements based on authentication state
const showAccountDashboard = (user) => {
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
    resumeCreation.forEach(item => item.style.display = 'none');
  } else {
    // User is logged out
    accountEmail.innerHTML = '';
    //show logged out elements and hide logged in elements
    loggedIn.forEach(item => item.style.display = 'none');
    loggedOut.forEach(item => item.style.display = 'block');
    resumeCreation.forEach(item => item.style.display = 'none');
  }
};


// Display the user's resumes onto the website (WIP)
const displayResumes = (doc) => {
  const resume = doc.data();
  const li = `
  <li>
    <h2> ${resume.resumeName} </h2>
    <h3> ${resume.firstName} ${resume.lastName} </h3>
  </li>
  `;
  html += li;
  resumeList.innerHTML = html;
};


// Hide the user's resumes from the website (WIP)
const hideResumes = () => {
  resumeList.innerHTML = '';
};


// Show resume templates screen
const showResumeTemplates = () => {
  loggedIn.forEach(item => item.style.display = 'none');
  resumeCreation.forEach(item => item.style.display = 'block');
  resumeTemplatesForm.forEach(item => item.style.display = 'block');
  contactInformationForm.forEach(item => item.style.display = 'none');
}


// Display contact information screen
const showContactInformation = () => {
  resumeTemplatesForm.forEach(item => item.style.display = 'none');
  contactInformationForm.forEach(item => item.style.display = 'block');
  summaryStatementForm.forEach(item => item.style.display = 'none');
};


//Display summary statement screen
const showSummaryStatement = () => {
  contactInformationForm.forEach(item => item.style.display = 'none');
  summaryStatementForm.forEach(item => item.style.display = 'block');
  educationForm.forEach(item => item.style.display = 'none');
};


// Display education screen
const showEducation = () => {
  summaryStatementForm.forEach(item => item.style.display = 'none');
  educationForm.forEach(item => item.style.display = 'block');
  technicalSkillsForm.forEach(item => item.style.display = 'none');
};


// Display technical skills screen
const showTechnicalSkills = () => {
  educationForm.forEach(item => item.style.display = 'none');
  technicalSkillsForm.forEach(item => item.style.display = 'block');
  workExperienceForm.forEach(item => item.style.display = 'none');
};


// Display work experience screen
const showWorkExperience = () => {
  technicalSkillsForm.forEach(item => item.style.display = 'none');
  workExperienceForm.forEach(item => item.style.display = 'block');
  projectExperienceForm.forEach(item => item.style.display = 'none');
};


// Display project experience screen
const showProjectExperience = () => {
  workExperienceForm.forEach(item => item.style.display = 'none');
  projectExperienceForm.forEach(item => item.style.display = 'block');
  certificationsForm.forEach(item => item.style.display = 'none');
};


// Display certifications screen
const showCertifications = () => {
  projectExperienceForm.forEach(item => item.style.display = 'none');
  certificationsForm.forEach(item => item.style.display = 'block');
  awardsForm.forEach(item => item.style.display = 'none');
};


// Display awards screen
const showAwards = () => {
  certificationsForm.forEach(item => item.style.display = 'none');
  awardsForm.forEach(item => item.style.display = 'block');
  activitiesForm.forEach(item => item.style.display = 'none');
};


// Display activities screen
const showActivities = () => {
  awardsForm.forEach(item => item.style.display = 'none');
  activitiesForm.forEach(item => item.style.display = 'block');
};