import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';

const Education = () => {
    const [schoolName, setSchoolName] = useState("");
    const [degreeLevel, setDegreeLevel] = useState("");
    const [major, setMajor] = useState("");
    const [gpa, setGPA] = useState("");
    const [educationStartDate, setEducationStartDate] = useState("");
    const [graduationDate, setGraduationDate] = useState("");
    const [relatedCoursework, set] = useState("");

    // Add education to resume template (US 7, FR 7.1)
    const addEducation = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                schoolName: schoolName,
                degreeLevel: degreeLevel,
                major: major,
                gpa: gpa,
                educationStartDate: educationStartDate,
                graduationDate: graduationDate,
                relatedCoursework: relatedCoursework
            });
            console.log("Education added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Education</h3>
            <form onSubmit={addEducation}>
                <input type="text" value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="School Name"/>
                <input type="text" value={degreeLevel}
                onChange={(e) => setDegreeLevel(e.target.value)}
                placeholder="Degree Level"/>
                <input type="text" value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="Major"/>
                <input type="text" value={gpa}
                onChange={(e) => setGPA(e.target.value)}
                placeholder="GPA"/>
                <input type="month" value={educationStartDate}
                onChange={(e) => setEducationStartDate(e.target.value)}
                placeholder="Start Date"/>
                <input type="month" value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
                placeholder="Graduation Date"/>
                <input type="textarea" value={relatedCoursework}
                onChange={(e) => set(e.target.value)}
                placeholder="Related Coursework"/>
                <button>Next: Technical Skills</button>
            </form>
            <button id="prev-summary-statement">Previous: Summary Statement</button>
        </div>
    )
}

export default Education
