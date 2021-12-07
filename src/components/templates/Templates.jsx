import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

const Templates = () => {
    const [templateID, setTemplateID] = useState("");

    // Select a resume template (US 4, FR 4.1)
    const createTemplate = async (e) => {
        try {
            e.preventDefault();
            const template = await addDoc(collection(db, "users", auth.currentUser.uid, "resumes"), {
                resumeName: "Resume"
            });
            setTemplateID(template.id);
            console.log("Resume template created.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Resume Templates</h3>
            <form onSubmit={createTemplate}>
                <button>Next: Contact Information</button>
            </form>
        </div>
    )
}

export default Templates
