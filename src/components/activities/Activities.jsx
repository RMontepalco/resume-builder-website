import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";

const Activities = () => {
    const [activityRole, setActivityRole] = useState("");
    const [activityName, setActivityName] = useState("");
    const [activityStartDate, setActivityStartDate] = useState("");
    const [activityEndDate, setActivityEndDate] = useState("");
    const [activityDescription, setActivityDescription] = useState("");

    // Add activities to resume template (US 13, FR 13.1)
    const addActivities = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", "test"), {
                activityRole: activityRole,
                activityName: activityName,
                activityStartDate: activityStartDate,
                activityEndDate: activityEndDate,
                activityDescription: activityDescription
            });
            console.log("Activities added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Activities</h3>
            <form onSubmit={addActivities}>
                <input type="text"value={activityRole}
                onChange={(e) => setActivityRole(e.target.value)}
                placeholder="Role"/>
                <input type="text"value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
                placeholder="Activity Name"/>
                <input type="month"value={activityStartDate}
                onChange={(e) => setActivityStartDate(e.target.value)}
                placeholder="Start Date"/>
                <input type="month"value={activityEndDate}
                onChange={(e) => setActivityEndDate(e.target.value)}
                placeholder="End Date"/>
                <input type="text"value={activityDescription}
                onChange={(e) => setActivityDescription(e.target.value)}
                placeholder="Description"/>
                <button>Next: Resume Review</button>
            </form>
            <button>Previous: Awards</button>
        </div>
    )
}

export default Activities
