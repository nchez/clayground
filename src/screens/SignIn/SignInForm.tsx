import { getAuth } from "firebase/auth";
import React, { useState, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "../../store/auth/userAtom";
import { useSubmitSignIn } from "./hooks/useSubmitSignIn";

export const SignInForm = () => {
    const [email, setEmail] = useState("shelleyrsuhling@gmail.com");
    const [password, setPassword] = useState("testaccount22");
    const { submit } = useSubmitSignIn();
    const setUser = useSetRecoilState(userAtom)
    const user = useRecoilValue(userAtom);



    const onEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    }, [])

    const onPasswordChange = useCallback((e) => { setPassword(e.target.value) }, [])

    const onSubmit = useCallback(async () => {
        console.log('hit')
        await submit(email, password)

        // if (!!auth.currentUser) {
        //     console.log('settinguser')
        //     console.log({ user })
        // }
        console.log('hit2',)
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
