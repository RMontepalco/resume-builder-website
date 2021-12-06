import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { auth, db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const Dashboard = () => {
    const logoutUser = async (e)=> {
        signOut(auth);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="logged-in">
                <h3 id="account-email"></h3>
                <ul id="resume-list"></ul>
                <button id="create-resume">Create Resume</button>
                <button id="logout" onClick={logoutUser}>Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard
