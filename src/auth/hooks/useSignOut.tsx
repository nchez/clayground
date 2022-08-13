import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userAtom } from "../../store/auth/userAtom";
import { signOutUser } from "../firebaseAuth"


export const useSignOut = () => {
    let navigate = useNavigate();

    const resetUser = useResetRecoilState(userAtom);


    return useCallback(async () => {
        await signOutUser()
        resetUser()
        navigate('/')
    }, [])
}