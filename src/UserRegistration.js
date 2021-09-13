import React from "react";
import { Link } from "react-router-dom";


export const UserRegistration = () => {


    return (
        <div className="container">
            <div className="container mt-5 border border-secondary rounded" >
                <h1>EVENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <Link to="/register" className="btn btn-primary btn-lg mt-4" >REGISTER</Link>
        </div>
    )
} 