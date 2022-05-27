import React, { useCallback } from 'react'
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";


export const useSubmitSignIn = () => {
    const auth = getAuth();


    const submit = useCallback(async (email: string, password: string) => {
        await setPersistence(auth, browserSessionPersistence)
        await signInWithEmailAndPassword(auth, email, password)
    }, [])

    return { submit };
};
