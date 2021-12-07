import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';

const SummaryStatement = () => {
    const [summaryStatement, setSummaryStatement] = useState("");

    // Add summary statement to resume template (US 6, FR 6.1)
    const addSummaryStatement = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                summaryStatement: summaryStatement
            });
            console.log("Summary statement added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Summary Statement</h3>
            <form onSubmit={addSummaryStatement}>
                <input type="text" value={summaryStatement}
                onChange={(e) => setSummaryStatement(e.target.value)}
                placeholder="Summary Statement"/>
                <button>Next: Education</button>
            </form>
            <button>Previous: Contact Information</button>
        </div>
    )
}

export default SummaryStatement
