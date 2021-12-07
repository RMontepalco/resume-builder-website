import React from 'react';
import { auth, db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

var templateID;

const Templates = () => {
    // Select a resume template (US 4, FR 4.1)
    const createTemplate = async (e) => {
        try {
            e.preventDefault();
            const template = await addDoc(collection(db, "users", auth.currentUser.uid, "resumes"), {
                resumeName: "Resume"
            });
            
            templateID = template.id;
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

export { Templates, templateID }
