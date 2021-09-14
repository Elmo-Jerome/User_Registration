import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");


    const newUser = () => {
        axios.post('http://localhost:3001/adduser', { 
            name: name, 
            email: email, 
            company: company, 
            role: role 
        }).then(() => {
            alert(`New user: ${name} with ${email} from ${company} which is a ${role}`);
        }).catch(() => {
            alert("Try again.");
        })
    }


    return (
        <form>
            <div className="form-group m-5">
                <label htmlFor="name">Name:</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name..."
                    required
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <label htmlFor="email">Email:</label>
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your valid email..."
                    required
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <label htmlFor="company">Company:</label>
                <input
                    className="form-control"
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Enter your Company name..."
                    required="true"
                    onChange={(event) => {
                        setCompany(event.target.value);
                    }}
                />
                <label htmlFor="role">Role:</label>
                <input
                    className="form-control"
                    type="text"
                    name="role"
                    id="role"
                    placeholder="Enter your company role..."
                    required
                    onChange={(event) => {
                        setRole(event.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn " onClick={newUser}>
                    <Link to="./UserList" className="btn btn-primary" >Register</Link>
                </button>
            </div>
        </form>
    )
}