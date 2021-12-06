import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
    return (
        <div>
            <h1>Log In</h1>
            <div className="logged-out">
                <form id="login-form">
                    <input type="email" id="login-email"
                    placeholder="Email Address"/>
                    <input type="password" id="login-password"
                    placeholder="Password"/>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
