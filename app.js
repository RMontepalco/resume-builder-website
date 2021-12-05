// DOM elements
const loggedOut = document.querySelectorAll('.logged-out');
const loggedIn = document.querySelectorAll('.logged-in');
const accountEmail = document.querySelector('#account-email');
const resumeList = document.querySelector('#resume-list');
const resumeCreation = document.querySelectorAll('.resume-creation');
const resumeTemplatesScreen = document.querySelectorAll('#resume-templates-screen');
const contactInformationScreen = document.querySelectorAll('#contact-information-screen');
const summaryStatementScreen = document.querySelectorAll('#summary-statement-screen');
const educationScreen = document.querySelectorAll('#education-screen');
const technicalSkillsScreen = document.querySelectorAll('#technical-skills-screen');
const workExperienceScreen = document.querySelectorAll('#work-experience-screen');
const projectExperienceScreen = document.querySelectorAll('#project-experience-screen');
const certificationsScreen = document.querySelectorAll('#certifications-screen');
const awardsScreen = document.querySelectorAll('#awards-screen');
const activitiesScreen = document.querySelectorAll('#activities-screen');
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
  resumeTemplatesScreen.forEach(item => item.style.display = 'block');
  contactInformationScreen.forEach(item => item.style.display = 'none');
}


// Display contact information screen
const showContactInformation = () => {
  resumeTemplatesScreen.forEach(item => item.style.display = 'none');
  contactInformationScreen.forEach(item => item.style.display = 'block');
  summaryStatementScreen.forEach(item => item.style.display = 'none');
};


//Display summary statement screen
const showSummaryStatement = () => {
  contactInformationScreen.forEach(item => item.style.display = 'none');
  summaryStatementScreen.forEach(item => item.style.display = 'block');
  educationScreen.forEach(item => item.style.display = 'none');
};


// Display education screen
const showEducation = () => {
  summaryStatementScreen.forEach(item => item.style.display = 'none');
  educationScreen.forEach(item => item.style.display = 'block');
  technicalSkillsScreen.forEach(item => item.style.display = 'none');
};


// Display technical skills screen
const showTechnicalSkills = () => {
  educationScreen.forEach(item => item.style.display = 'none');
  technicalSkillsScreen.forEach(item => item.style.display = 'block');
  workExperienceScreen.forEach(item => item.style.display = 'none');
};


// Display work experience screen
const showWorkExperience = () => {
  technicalSkillsScreen.forEach(item => item.style.display = 'none');
  workExperienceScreen.forEach(item => item.style.display = 'block');
  projectExperienceScreen.forEach(item => item.style.display = 'none');
};


// Display project experience screen
const showProjectExperience = () => {
  workExperienceScreen.forEach(item => item.style.display = 'none');
  projectExperienceScreen.forEach(item => item.style.display = 'block');
  certificationsScreen.forEach(item => item.style.display = 'none');
};


// Display certifications screen
const showCertifications = () => {
  projectExperienceScreen.forEach(item => item.style.display = 'none');
  certificationsScreen.forEach(item => item.style.display = 'block');
  awardsScreen.forEach(item => item.style.display = 'none');
};


// Display awards screen
const showAwards = () => {
  certificationsScreen.forEach(item => item.style.display = 'none');
  awardsScreen.forEach(item => item.style.display = 'block');
  activitiesScreen.forEach(item => item.style.display = 'none');
};


// Display activities screen
const showActivities = () => {
  awardsScreen.forEach(item => item.style.display = 'none');
  activitiesScreen.forEach(item => item.style.display = 'block');
};

// Return to account dashboard screen (WIP)
const returnToAccountDashboard = () => {
  activitiesScreen.forEach(item => item.style.display = 'none');
}