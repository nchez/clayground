import React, { useState, useCallback } from "react";
import { useSubmitSignIn } from "./hooks/useSubmitSignIn";

export const SignInForm = () => {
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const { submit } = useSubmitSignIn();

    const onEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    }, [])

    const onPasswordChange = useCallback((e) => { setPassword(e.target.value) }, [])

    const onSubmit = useCallback(async () => {
        await submit(email, password)
    }, [email, password])


    return (
        <div style={{ flexDirection: "column" }}>
            <div>Sign In</div>
            <div>
                <input placeholder="email" onChange={onEmailChange}></input>
            </div>
            <div>
                <input placeholder="password" onChange={onPasswordChange}></input>
            </div>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};
