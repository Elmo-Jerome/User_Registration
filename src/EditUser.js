import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const EditUser = () => {
    const [user, setUser] = useState();
    const { register, handleSubmit } = useForm({
        defaultValues: { fullName: user ? user.fullName : "" },
    });
    const history = useHistory();

    useEffect(() => {
        setUser({
            fullName: "rick"
        })
    }, []);

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        history.push("/");
    });


    return (
        <div className="container">
            <div className="mt-3">
                <h3>Edit User Information</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input className="form-control" {...register('fullName', { required: true })} type="text" name="fullName" id="fullName"></input>
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );

}