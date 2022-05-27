import React, { useCallback } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { saveAuth } from '../../../store/AuthStore';



export const useSubmitSignIn = () => {
    const auth = getAuth();


    const submit = useCallback(async (email: string, password: string) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const token = await userCredential.user.getIdToken()
        saveAuth(token)
    }, [])

    return { submit };
};
