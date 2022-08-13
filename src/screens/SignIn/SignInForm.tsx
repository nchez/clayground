import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useCallSignIn } from "../SignIn/hooks/useSubmitSignIn";

// Test user
// shelleyrsuhling@gmail.com 
// testaccount22

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm();

    const callSignIn = useCallSignIn()

    const onSubmit = useCallback(async ({ email, password }) => {
        try {
            await callSignIn(email, password)
        } catch (err) {
            setError('auth_fail', err)
        }
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ flexDirection: "column" }}>
                <div>Sign In</div>
                <FormErrors errors={errors} />
                <div>
                    <input {...register('email', { required: true, value: 'shelleyrsuhling@gmail.com' })}></input>
                </div>
                <div>
                    <input {...register('password', { required: true, value: 'testaccount22' })}></input>
                </div>
                <input type="submit" />
            </div >
        </form>
    );
};



const FormErrors = ({ errors }) => {
    return <>
        {errors.email && <p>email is required.</p>}
        {errors.password && <p>password is required.</p>}
        {errors.auth_fail && <p>authentication failed</p>}
    </>
}
