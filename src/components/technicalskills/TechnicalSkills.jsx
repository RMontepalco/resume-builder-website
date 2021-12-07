import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";

const TechnicalSkills = () => {
    const [technicalSkills, setTechnicalSkills] = useState("");

    // Add technical skills to resume template (US 8, FR 8.1)
    const addTechnicalSkills = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", "test"), {
                technicalSkills: technicalSkills
            });
            console.log("Technical skills added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Technical Skills</h3>
            <form onSubmit={addTechnicalSkills}>
                <input type="text" value={technicalSkills}
                onChange={(e) => setTechnicalSkills(e.target.value)}
                placeholder="Technical Skills"/>
                <button>Next: Work Experience</button>
            </form>
            <button>Previous: Education</button>
        </div>
    )
}

export default TechnicalSkills
