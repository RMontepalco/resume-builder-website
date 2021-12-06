import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import {Header} from './containers';
import {Home} from './components';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import CreateResume from './components/createresume/CreateResume';
import Firebase from './firebase.js';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div>
                <Home/>
                <Login/>
                <SignUp/>
                <Dashboard/>
                <CreateResume/>
            </div>
        </div>
    )
}


export default App
