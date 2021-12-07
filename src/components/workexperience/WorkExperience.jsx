import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";

const WorkExperience = () => {
    const [workPosition, setWorkPosition] = useState("");
    const [workCompanyName, setWorkCompanyName] = useState("");
    const [workCity, setWorkCity] = useState("");
    const [workStartDate, setWorkStartDate] = useState("");
    const [workEndDate, setWorkEndDate] = useState("");
    const [workDescription, setWorkDescription] = useState("");

    // Add education to resume template (US 7, FR 7.1)
    const addWorkExperience = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", "test"), {
                workPosition: workPosition,
                workCompanyName: workCompanyName,
                workCity: workCity,
                workStartDate: workStartDate,
                workEndDate: workEndDate,
                workDescription: workDescription
            });
            console.log("Education added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Work Experience</h3>
            <form onSubmit={addWorkExperience}>
                <input type="text" value={workPosition}
                onChange={(e) => setWorkPosition(e.target.value)}
                placeholder="Work Position"/>
                <input type="text" value={workCompanyName}
                onChange={(e) => setWorkCompanyName(e.target.value)}
                placeholder="Company Name"/>
                <input type="text" value={workCity}
                onChange={(e) => setWorkCity(e.target.value)}
                placeholder="City"/>
                <input type="month" value={workStartDate}
                onChange={(e) => setWorkStartDate(e.target.value)}
                placeholder="Start Date"/>
                <input type="month" value={workEndDate}
                onChange={(e) => setWorkEndDate(e.target.value)}
                placeholder="End Date"/>
                <input type="text" value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                placeholder="Description"/>
                <button>Next: Project Experience</button>
            </form>
            <button id="prev-technical-skills">Previous: Technical Skills</button>
        </div>
    )
}

export default WorkExperience
