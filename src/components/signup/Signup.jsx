import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", auth.currentUser.uid), {
            email: auth.currentUser.email
        });
            //console.log(user);
        } catch (error) {
            //console.log(error);
        }
        
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <div className="logged-out">
                <form id="signup-form" onSubmit={createUser}>
                    <input type="email" id="signup-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"/>
                    <input type="password" id="signup-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
