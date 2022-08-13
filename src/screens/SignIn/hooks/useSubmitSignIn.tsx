import { useCallback } from 'react'
import { userAtom } from '../../../store/auth/userAtom';
import { useRecoilState } from 'recoil';
import { signInWithEmail } from '../../../auth/firebaseAuth';

export const useCallSignIn = () => {
    const [_user, setUser] = useRecoilState(userAtom);


    return useCallback(async (email: string, password: string) => {
        const { user: authedUser } = await signInWithEmail(email, password)
        setUser({ email: authedUser.email })

    }, [])
};
