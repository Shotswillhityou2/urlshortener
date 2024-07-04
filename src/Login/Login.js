import React, { useState } from 'react';
import './Login.css'
import Register from "./Register";
import {fetchData, getBackendConnection, postData} from "../BackendConnection/BackendConnection";
import axios from "axios";
export default function Login(logginRef) {


    return(
        <div>
            <ul className="holder-list">
                <li className="holder-list-item">{Register()}</li>
                <li className="holder-list-item"><p>Or</p></li>
                <li className="holder-list-item">{LoginComp(logginRef)}</li>
            </ul>
        </div>
    );
}

const LoginComp = (loginRef) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[result,setResult]=useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(getBackendConnection()+'/registerUser',setResult,{email,password})
        // Handle login logic here
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>
                <div className="form-group">
                    <label className="login-label" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="login-label" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};
