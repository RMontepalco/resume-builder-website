import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';

const ContactInformation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");

    // Add contact information to resume template (US 5, FR 5.1)
    const addContactInformation = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                firstName: firstName,
                lastName: lastName,
                city: city,
                state: state,
                zipCode: zipCode,
                phoneNumber: phoneNumber,
                emailAddress: email,
                website: website
            });
            console.log("Contact information added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Contact Information</h3>
            <form onSubmit={addContactInformation}>
                <input type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"/>
                <input type="text" value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"/>
                <input type="text" value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"/>
                <input type="text" value={state}
                onChange={(e) => setState(e.target.value)}
                maxLength="2" 
                placeholder="State"/>
                <input type="text" value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                pattern="[0-9]{5}" 
                placeholder="Ex: XXXXX"/>
                <input type="tel" value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="Ex: XXX-XXX-XXXX"/>
                <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"/>
                <input type="text" value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website"/>
                <button>Next: Summary Statement</button>
            </form>
        </div>
    )
}

export default ContactInformation
