import React, { useCallback, useEffect } from 'react'
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { userAtom } from '../../../store/auth/userAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { signInWithEmail } from '../../../auth/firebaseAuth';


export const useSubmitSignIn = () => {
    const [_user, setUser] = useRecoilState(userAtom);

    const submit = useCallback(async (email: string, password: string) => {
        const { user: authedUser } = await signInWithEmail(email, password)
        setUser(authedUser.email)
    }, [])

    return { submit };
};
