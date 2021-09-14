import { useEffect, useState } from "react";
import axios from "axios";


export const UserList = (() => {
    const [userlist, setUserlist] = useState([]);


    useEffect = (() => {
        axios.get('http://localhost:3001/userlist')
            .then((response) => {
                setUserlist(response.data);
            }).catch(() => {
                console.log('error');
            })
    }, []);

    return (
        <div>
            {userlist.map((val) => {
                return <div>{val.name}, {val.email}, {val.company}, {val.role} </div>
            })}
        </div>
    );
});

