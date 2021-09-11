import React, { useState, useEffect } from "react";
import { UserForm } from "./UserForm";

export const EditUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser({
            fullName: "rick"
        });
    }, []);

    const onSubmit = (data)=>{
        alert(JSON.stringify(data))
    }

    return user ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit User Information</h3>
                <UserForm user={user} onSubmit={onSubmit} />
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};