import { useEffect, useState } from "react";
import axios from "axios";


export const UserList = () => {
    const [userlist, setUserlist] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/userlist')
            .then((response) => {
                setUserlist(response.data);
            }).catch(() => {
                console.log('error');
            })
    }, []);

    return (
        <div className="container">
            <h1>List of Registered User</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Company</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {userlist.map((val) => {
                        return (
                            <tr key={val._id}>
                                <td>{val.name} </td>
                                <td>{val.email} </td>
                                <td>{val.company} </td>
                                <td>{val.role} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}