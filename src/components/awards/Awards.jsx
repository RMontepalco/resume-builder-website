import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';

const Awards = () => {
    const [awardName, setAwardName] = useState("");
    const [awardOrganization, setAwardOrganization] = useState("");
    const [awardGivenDate, setAwardGivenDate] = useState("");

    // Add awards to resume template (US 12, FR 12.1)
    const addAwards = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                awardName: awardName,
                awardOrganization: awardOrganization,
                awardGivenDate: awardGivenDate
            });
            console.log("Awards added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <form onSubmit={addAwards}>
                <h3>Awards</h3>
                <input type="text"value={awardName}
                onChange={(e) => setAwardName(e.target.value)}
                placeholder="Award Name"/>
                <input type="text"value={awardOrganization}
                onChange={(e) => setAwardOrganization(e.target.value)}
                placeholder="Organization"/>
                <input type="month"value={awardGivenDate}
                onChange={(e) => setAwardGivenDate(e.target.value)}
                placeholder="Date Given"/>
                <button>Next: Activities</button>
            </form>
            <button id="prev-certifications">Previous: Certifications</button>
        </div>
    )
}

export default Awards
