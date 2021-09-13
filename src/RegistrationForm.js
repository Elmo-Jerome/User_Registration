import React, { useState } from "react";
import Axios from "axios";



export const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");


    const newUser = () => {
        Axios.post('http://localhost:3001/adduser', { 
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
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name..."
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
                    onChange={(event) => {
                        setRole(event.target.value);
                    }}
                />
            </div>
            <div className="form-group mt-4">
                <button type="submit" className="btn btn-primary" onClick={newUser}>
                    Register
                </button>
            </div>
        </form>
    )
}