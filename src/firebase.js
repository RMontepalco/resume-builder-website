// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
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
var currentUser;
var uid;
var templateID = 69;



// Authentication State Observer and User Data
// Track whether a user is logged in or logged out, 
// and show certain web elements depending on the status
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is logged in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        currentUser = user;
        uid = user.uid;
        // showAccountDashboard(user);
        // html = '';
        console.log('Logged in as', user.email);

        // Retrive user's resumes from the database (WIP)
        //const querySnapshot = await getDocs(collection(db, "users", uid, "resumes"));
        //let i = 0;
        //querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            // displayResumes(doc);
            //i++;
        //});

        // User has no resumes in the database
        //if (i == 0) {
            // resumeList.innerHTML = '<h4> You have no resumes. </h4>'
        //};
    } else {
        // User is logged out
        console.log('Logged out');
        // showAccountDashboard(user);
        // hideResumes();
    }
});


/*

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
      .then(async (userCredential) => {
        // Store account to database
        currentUser = userCredential.user;
        // add user's UID to collection of users
        await setDoc(doc(db, "users", userCredential.user.uid), {
            email: userCredential.user.email
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
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
            user = userCredential.user;
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
            // An error occured.
        });
});


// Begin the resume creation process
const createResume = document.querySelector("#create-resume");
createResume.addEventListener('click', (e) => {
    e.preventDefault();
    showResumeTemplates();
});


// Select a resume template (US 4, FR 4.1) (WIP)
const selectResumeTemplate = document.querySelector("#resume-templates-form");
selectResumeTemplate.addEventListener('submit', async (e) => {
    e.preventDefault();

    const template = await addDoc(collection(db, "users", uid, "resumes"), {
        resumeName: "Resume"
    });
    templateID = template.id

    showContactInformation();
});


// Return to contact information screen
const prevContactInformation = document.querySelector('#prev-contact-information');
prevContactInformation.addEventListener('click', (e) => {
    e.preventDefault();
    showContactInformation();
});


// Add contact information to resume template (US 5, FR 5.1)
const addContactInformation = document.querySelector("#contact-information-form");
addContactInformation.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        firstName: addContactInformation['first-name'].value,
        lastName: addContactInformation['last-name'].value,
        city: addContactInformation['city'].value,
        state: addContactInformation['state'].value,
        zipCode: addContactInformation['zip-code'].value,
        phoneNumber: addContactInformation['phone-number'].value,
        emailAddress: addContactInformation['contact-information-email'].value
    });

    showSummaryStatement();
});


// Return to summary statement screen
const prevSummaryStatement = document.querySelector('#prev-summary-statement');
prevSummaryStatement.addEventListener('click', (e) => {
    e.preventDefault();
    showSummaryStatement();
});


// Add summary statement to resume template (US 6, FR 6.1)
const addSummaryStatement = document.querySelector("#summary-statement-form");
addSummaryStatement.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        summaryStatement: addSummaryStatement['summary-statement'].value
    });

    showEducation();
});


// Return to education screen
const prevEducation = document.querySelector('#prev-education');
prevEducation.addEventListener('click', (e) => {
    e.preventDefault();
    showEducation();
});


// Add education to resume template (US 7, FR 7.1)
const addEducation = document.querySelector('#education-form');
addEducation.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        schoolName: addEducation['school-name'].value,
        degreeLevel: addEducation['degree-level'].value,
        major: addEducation['major'].value,
        gpa: addEducation['gpa'].value,
        educationStartDate: addEducation['education-start-date'].value,
        graudationDate: addEducation['graduation-date'].value,
        relatedCourseWork: addEducation['related-coursework'].value
    });

    showTechnicalSkills();
});


// Return to technical skills screen
const prevTechnicalSkills = document.querySelector('#prev-technical-skills');
prevTechnicalSkills.addEventListener('click', (e) => {
    e.preventDefault();
    showTechnicalSkills();
});


// Add technical skills to resume template (US 8, FR 8.1)
const addTechnicalSkills = document.querySelector('#technical-skills-form');
addTechnicalSkills.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        technicalSkills: addTechnicalSkills['technical-skills'].value
    });

    showWorkExperience();
});


// Return to work experience screen
const prevWorkExperience = document.querySelector('#prev-work-experience');
prevWorkExperience.addEventListener('click', (e) => {
    e.preventDefault();
    showWorkExperience();
});


// Add work experience to resume template (US 9, FR 9.1)
const addWorkExperience = document.querySelector('#work-experience-form');
addWorkExperience.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        workPosition: addWorkExperience['work-position'].value,
        workCompanyName: addWorkExperience['work-company-name'].value,
        workCity: addWorkExperience['work-city'].value,
        workStartDate: addWorkExperience['work-start-date'].value,
        workEndDate: addWorkExperience['work-end-date'].value,
        workDescription: addWorkExperience['work-description'].value
    });

    showProjectExperience();
});


// Return to project experience screen
const prevProjectExperience = document.querySelector('#prev-project-experience');
prevProjectExperience.addEventListener('click', (e) => {
    e.preventDefault();
    showProjectExperience();
});


// Add project experience to resume template (US 10, FR 10.1)
const addProjectExperience = document.querySelector('#project-experience-form');
addProjectExperience.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        projectName: addProjectExperience['project-name'].value,
        projectCompanyName: addProjectExperience['project-company-name'].value,
        projectCity: addProjectExperience['project-city'].value,
        projectStartDate: addProjectExperience['project-start-date'].value,
        projectEndDate: addProjectExperience['project-end-date'].value,
        projectDescription: addProjectExperience['project-description'].value
    });

    showCertifications();
});


// Return to certifications screen
const prevCertifications = document.querySelector('#prev-certifications');
prevCertifications.addEventListener('click', (e) => {
    e.preventDefault();
    showCertifications();
});


// Add certifications to resume template (US 11, FR 11.1)
const addCertifications = document.querySelector('#certifications-form');
addCertifications.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        certificationName: addCertifications['certification-name'].value,
        certificationOrganization: addCertifications['certification-organization'].value,
        certificationIssuedDate: addCertifications['certification-issued-date'].value,
        certificationExpirationDate: addCertifications['certification-expiration-date'].value
    });

    showAwards();
});


// Return to awards screen
const prevAwards = document.querySelector('#prev-awards');
prevAwards.addEventListener('click', (e) => {
    e.preventDefault();
    showAwards();
});


// Add awards to resume template (US 12, FR 12.1)
const addAwards = document.querySelector('#awards-form');
addAwards.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        awardName: addAwards['award-name'].value,
        awardOrganization: addAwards['award-organization'].value,
        awardGivenDate: addAwards['award-given-date'].value
    });

    showActivities();
});


// Add activities to resume template (US 13, FR 13.1)
const addActivities = document.querySelector("#activities-form");
addActivities.addEventListener('submit', async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", uid, "resumes", templateID), {
        activityRole: addActivities['activity-role'].value,
        activityName: addActivities['activity-name'].value,
        activityStartDate: addActivities['activity-start-date'].value,
        activityEndDate: addActivities['activity-end-date'].value,
        activityDescription: addActivities['activity-description'].value
    });

    //returnToAccountDashboard();
    //showAccountDashboard(currentUser);
});

*/

// Store resume into the database (US 14, FR 14.1) (WIP)


export {app, auth, db, templateID}