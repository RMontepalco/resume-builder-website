import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Create an Account (US 1, FR 1.1-1.4)
    const createUser = async (e) => {
        try {
            e.preventDefault();
            await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                email: auth.currentUser.email
            })
            //console.log(user);
        } catch (error) {
            //console.log(error);
        }
        
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={createUser}>
                <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"/>
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
