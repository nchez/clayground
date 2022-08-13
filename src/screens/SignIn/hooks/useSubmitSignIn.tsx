import { useCallback } from 'react'
import { userAtom } from '../../../store/auth/userAtom';
import { useRecoilState } from 'recoil';
import { signInWithEmail } from '../../../auth/firebaseAuth';
import { FIREBASE_ROOT } from '../../../firebaseEnv';


export const useCallSignIn = () => {
    const [_user, setUser] = useRecoilState(userAtom);

    return useCallback(async (email: string, password: string) => {
        const { user: authedUser } = await signInWithEmail(email, password)

        const response = await fetch(`${FIREBASE_ROOT}/user_profiles.json?orderBy="$key"&equalTo="${authedUser.uid}"`,
            {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
        const responseJSON = await response.json()
        setUser(responseJSON[authedUser.uid])
    }, [])
};
