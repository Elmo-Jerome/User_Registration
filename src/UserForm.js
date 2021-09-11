import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const UserForm = ({user, onSubmit}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: { fullName: user ? user.fullName : "" },
    });
    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
        history.push("/");
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input className="form-control" {...register('fullName', { required: true })} type="text" id="fullName"></input>
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    );
}