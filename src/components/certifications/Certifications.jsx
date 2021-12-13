import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';

const Certifications = () => {
    const [certificationName, setCertificationName] = useState("");
    const [certificationOrganization, setCertificationOrganization] = useState("");
    const [certificationIssuedDate, setCertificationIssuedDate] = useState("");
    const [certificationExpirationDate, setCertificationExpirationDate] = useState("");

    // Add certifications to resume template (US 11, FR 11.1) 
    const addCertifications = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                certificationName: certificationName,
                certificationOrganization: certificationOrganization,
                certificationIssuedDate: certificationIssuedDate,
                certificationExpirationDate: certificationExpirationDate
            });
            console.log("Certifications added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <form onSubmit={addCertifications}>
                <h3>Certifications</h3>
                <input type="text" value={certificationName}
                onChange={(e) => setCertificationName(e.target.value)}
                placeholder="Certification Name"/>
                <input type="text" value={certificationOrganization}
                onChange={(e) => setCertificationOrganization(e.target.value)}
                placeholder="Organization"/>
                <input type="month" value={certificationIssuedDate}
                onChange={(e) => setCertificationIssuedDate(e.target.value)}
                placeholder="Date Issued"/>
                <input type="month" value={certificationExpirationDate}
                onChange={(e) => setCertificationExpirationDate(e.target.value)}
                placeholder="Expiration Date"/>
                <button>Next: Awards</button>
            </form>
            <button>Previous: Project Experience</button>
        </div>
    )
}

export default Certifications
