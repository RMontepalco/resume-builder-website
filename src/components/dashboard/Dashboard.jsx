import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { auth, db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const Dashboard = () => {
    const [user, setUser] = useState({});

    // Display current user's email address
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // Log Out of Account (US 3, FR 3.1-3.3)
    const logoutUser = async (e)=> {
        signOut(auth);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Logged in as: {user?.email}</h3>
            <ul id="resume-list"></ul>
            <button>Create Resume</button>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    )
}

export default Dashboard
