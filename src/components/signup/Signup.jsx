import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <div className="logged-out">
                <form id="signup-form">
                    <input type="email" id="signup-email"
                    placeholder="Email Address"/>
                    <input type="password" id="signup-password"
                    placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
