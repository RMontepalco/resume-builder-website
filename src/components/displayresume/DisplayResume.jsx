import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import './displayresume.css'

const DisplayResume = () => {
    const [resume, setResume] = useState({});
    useEffect(async () => {
        const resumeRef = await getDoc(doc(db, "users", "J3GoYccbaaZE2YJU5bP75oJCBSh1", "resumes", "7aeNHbYbiBZb9JZqVxYk"));
        const resumeData = resumeRef.data();
        setResume(resumeData);
    }, [])

    return (
        <div className="display_resume">
            <h4 id="name">{resume.firstName} {resume.lastName}</h4>
            <p id="contact_info">{resume.emailAddress} | {resume.phoneNumber} | {resume.city}, {resume.state} {resume.zipCode} | {resume.website}</p>
            <h6 className="heading" style={{display: "inline"}}>SUMMARY STATEMENT: </h6>
            <p style={{display: "inline"}}>bruh</p>
            <br/>
            <br/>
            <h6 className="heading">EDUCATION</h6>
            <p>{resume.degreeLevel} {resume.major}</p>
            <p className="date">{resume.educationStartDate} to {resume.graduationDate}</p>
            <p>{resume.schoolName}</p>
            <p>GPA: {resume.gpa}</p>
            <p>Related Coursework: {resume.relatedCoursework}</p>
            <br/>
            <h6 className="heading">TECHNICAL SKILLS</h6>
            <p>{resume.technicalSkills}</p>
            <br/>
            <h6 className="heading">WORK EXPERIENCE</h6>
            <p><b>{resume.workPosition}</b>, {resume.workCompanyName}, {resume.workCity}, {resume.workState}</p>
            <p className="date">{resume.workStartDate} to {resume.workEndDate}</p>
            <p>{resume.workDescription}</p>
            <br/>
            <h6 className="heading">PROJECT EXPERIENCE</h6>
            <p><b>{resume.projectName}</b>, {resume.projectCompanyName}, {resume.projectCity}, {resume.projectState}</p>
            <p className="date">{resume.projectStartDate} to {resume.projectEndDate}</p>
            <p>{resume.projectDescription}</p>
            <br/>
            <h6 className="heading">CERTIFICATIONS</h6>
            <p><b>{resume.certificationName}</b>, {resume.certificationOrganization}, Issued {resume.certificationIssuedDate}, Expires {resume.certificationExpirationDate}</p>
            <br/>
            <h6 className="heading">AWARDS</h6>
            <p><b>{resume.awardName}</b>, {resume.awardOrganization}, Given on {resume.awardGivenDate}</p>
            <br/>
            <h6 className="heading">ACTIVITIES</h6>
            <p><b>{resume.activityRole}</b>, {resume.activityName}</p>
            <p className="date">{resume.activityStartDate} to {resume.activityEndDate}</p>
        </div>
    )
}

export default DisplayResume
