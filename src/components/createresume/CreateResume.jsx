import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const CreateResume = () => {
    return (
        <div>
            <h1>Create Resume</h1>
            <div className="resume-creation">
                <h2>Create A New Resume</h2>

                <div id="resume-templates-screen">
                    <form id="resume-templates-form">
                        <h3>Resume Templates</h3>
                        <button>Next: Contact Information</button>
                    </form>
                </div>
                    
                <div id="contact-information-screen">
                    <form id="contact-information-form">
                        <h3>Contact Information</h3>
                        <input type="text" id="first-name"
                        placeholder="First Name"/>
                        <input type="text" id="last-name"
                        placeholder="Last Name"/>
                        <input type="text" id="city"
                        placeholder="City"/>
                        <input type="text" id="state"
                        maxLength="2" 
                        placeholder="State"/>
                        <input type="text" id="zip-code"
                        pattern="[0-9]{5}" 
                        placeholder="Ex: XXXXX"/>
                        <input type="tel" id="phone-number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        placeholder="Ex: XXX-XXX-XXXX"/>
                        <input type="email" id="contact-information-email"
                        placeholder="Email Address"/>
                        <button>Next: Summary Statement</button>
                    </form>
                </div>

                <div id="summary-statement-screen">
                    <form id="summary-statement-form">
                        <h3>Summary Statement</h3>
                        <input type="text" id="summary-statement"
                        placeholder="Summary Statement"/>
                        <button>Next: Education</button>
                    </form>
                    <button id="prev-contact-information">Previous: Contact Information</button>
                </div>

                <div id="education-screen">
                    <form id="education-form">
                        <h3>Education</h3>
                        <input type="text" id="school-name"
                        placeholder="School Name"/>
                        <input type="text" id="degree-level"
                        placeholder="Degree Level"/>
                        <input type="text" id="major"
                        placeholder="Major"/>
                        <input type="text" id="gpa"
                        placeholder="GPA"/>
                        <input type="month" id="education-start-date"
                        placeholder="Start Date"/>
                        <input type="month" id="graduation-date"
                        placeholder="Graduation Date"/>
                        <input type="text" id="related-coursework"
                        placeholder="Related Coursework"/>
                        <button>Next: Technical Skills</button>
                    </form>
                    <button id="prev-summary-statement">Previous: Summary Statement</button>
                </div>

                <div id="technical-skills-screen">
                    <form id="technical-skills-form">
                        <h3>Technical Skills</h3>
                        <input type="text" id="technical-skills"
                        placeholder="Technical Skills"/>
                        <button>Next: Work Experience</button>
                    </form>
                    <button id="prev-education">Previous: Education</button>
                </div>

                <div id="work-experience-screen">
                    <form id="work-experience-form">
                        <h3>Work Experience</h3>
                        <input type="text" id="work-position"
                        placeholder="Work Position"/>
                        <input type="text" id="work-company-name"
                        placeholder="Company Name"/>
                        <input type="text" id="work-city"
                        placeholder="City"/>
                        <input type="month" id="work-start-date"
                        placeholder="Start Date"/>
                        <input type="month" id="work-end-date"
                        placeholder="End Date"/>
                        <input type="text" id="work-description"
                        placeholder="Description"/>
                        <button>Next: Project Experience</button>
                    </form>
                    <button id="prev-technical-skills">Previous: Technical Skills</button>
                </div>

                <div id="project-experience-screen">
                    <form id="project-experience-form">
                        <h3>Project Experience</h3>
                        <input type="text" id="project-name"
                        placeholder="Project Name"/>
                        <input type="text" id="project-company-name"
                        placeholder="Company Name"/>
                        <input type="text" id="project-city"
                        placeholder="City"/>
                        <input type="month" id="project-start-date"
                        placeholder="Start Date"/>
                        <input type="month" id="project-end-date"
                        placeholder="End Date"/>
                        <input type="text" id="project-description"
                        placeholder="Description"/>
                        <button>Next: Certifications</button>
                    </form>
                    <button id="prev-work-experience">Previous: Work Experience</button>
                </div>

                <div id="certifications-screen">
                    <form id="certifications-form">
                        <h3>Certifications</h3>
                        <input type="text" id="certification-name"
                        placeholder="Certification Name"/>
                        <input type="text" id="certification-organization"
                        placeholder="Organization"/>
                        <input type="month" id="certification-issued-date"
                        placeholder="Date Issued"/>
                        <input type="month" id="certification-expiration-date"
                        placeholder="Expiration Date"/>
                        <button>Next: Awards</button>
                    </form>
                    <button id="prev-project-experience">Previous: Project Experience</button>
                </div>

                <div id="awards-screen">
                    <form id="awards-form">
                        <h3>Awards</h3>
                        <input type="text" id="award-name"
                        placeholder="Award Name"/>
                        <input type="text" id="award-organization"
                        placeholder="Organization"/>
                        <input type="month" id="award-given-date"
                        placeholder="Date Given"/>
                        <button>Next: Activities</button>
                    </form>
                    <button id="prev-certifications">Previous: Certifications</button>
                </div>

                <div id="activities-screen">
                    <form id="activities-form">
                        <h3>Activities</h3>
                        <input type="text" id="activity-role"
                        placeholder="Role"/>
                        <input type="text" id="activity-name"
                        placeholder="Activity Name"/>
                        <input type="month" id="activity-start-date"
                        placeholder="Start Date"/>
                        <input type="month" id="activity-end-date"
                        placeholder="End Date"/>
                        <input type="text" id="activity-description"
                        placeholder="Description"/>
                        <button>Submit</button>
                    </form>
                    <button id="prev-awards">Previous: Awards</button>
                </div>
            </div>
        </div>
    )
}

export default CreateResume
