import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserRegistration = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([
            { fullName: "rick", id: 0 },
            { fullName: "morty", id: 1 },
            { fullName: "pickle", id: 2 },
        ])
    }, [])

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Registered Users</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        {user.fullName}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${user.id}`}>Edit User Info</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};