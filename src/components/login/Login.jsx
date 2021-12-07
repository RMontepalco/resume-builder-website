import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import Navbar from '../../components/navbar/Navbar';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Log In to Account (US 2, FR 2.1-2.3)
    const loginUser = async (e) => {
        try {
            e.preventDefault();
            const user = await signInWithEmailAndPassword(auth, email, password);
            //console.log(user);
        } catch (error) {
            //console.log(error);
        }
        
    }

    return (
        <div>
            <Navbar />
            <h1>Log In</h1>
            <form onSubmit={loginUser}>
                <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"/>
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"/>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login
