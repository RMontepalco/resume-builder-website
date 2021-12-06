import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            //console.log(user);
        } catch (error) {
            //console.log(error);
        }
        
    }


    return (
        <div>
            <h1>Log In</h1>
            <div className="logged-out">
                <form id="login-form" onSubmit={loginUser}>
                    <input type="email" id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"/>
                    <input type="password" id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"/>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
